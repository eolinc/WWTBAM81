/**********************************************************************************************************
 * AutoPlayManager.js
 * Drives the game forward automatically (lights down -> reveal question -> reveal answers one by one ->
 * reveal correct/wrong -> next question), using the exact same functions the keyboard/touch controls use
 * (window.triggerGameControllerKey). It never invents new game behaviour.
 *
 * It PAUSES automatically and does nothing at the two points where the player must choose:
 *   1) After all 4 answers are shown, waiting for an answer lock-in (1/2/3/4) or a lifeline (A/F/P/S/D)
 *      or Walk Away (W) — all of these remain available on the touch panel, untouched.
 *   2) It does not touch a lifeline reveal at all; the player decides freely whether to use one before
 *      locking in an answer, exactly like the original controller.
 *
 * It stops entirely (does not loop to a next question) when the game actually ends:
 *   - a wrong answer was given (IsWalkingAway becomes true), or
 *   - the last question was answered correctly (QuestionSequenceCounter goes back to -1 with no more levels).
 **********************************************************************************************************/
(function () {

	var TIMINGS = {
		afterLightsDown: 1300,      // 0 -> 1
		afterQuestionReveal: 1100,  // 1 -> 2 (question strap slide-in)
		betweenAnswers: 900,        // 2->3->4->5 (one answer revealed per tick)
		afterLockIn: 1600,          // 6: reveal correct/wrong (suspense pause)
		afterCorrectReveal: 1400,   // 7: hide straps / show amount won
		beforeNextQuestion: 1800,   // 8: level up, then loop back to 0
		afterWrongReveal: 1800,     // 9: reduce amount / hide straps (game over)
		pollInterval: 250           // how often we check "did the player decide yet?"
	};

	var running = false;
	var pollTimer = null;

	function key(code) {
		if (typeof window.triggerGameControllerKey === 'function') {
			window.triggerGameControllerKey(code);
		}
	}

	function gv() { return window.GameVariables || {}; }

	function step(delay, fn) {
		setTimeout(function () { if (running) { fn(); } }, delay);
	}

	/* ---- Per-question reveal: lights down -> question -> 4 answers -> then PAUSE (do nothing) ---- */
	function playOutQuestionReveal() {
		key(39); // counter 0 -> 1 (lights down)
		step(TIMINGS.afterLightsDown, function () {
			key(39); // counter 1 -> 2 (question + answer straps slide in)
			step(TIMINGS.afterQuestionReveal, revealNextAnswer);
		});
	}

	function revealNextAnswer() {
		key(39); // reveals one more answer (counter 2->3->4->5, then auto-resets to -1 internally)
		if (gv().QuestionSequenceCounter === -1) {
			// All 4 answers are visible. This is a decision point: wait for the player.
			waitForPlayerDecision();
		} else {
			step(TIMINGS.betweenAnswers, revealNextAnswer);
		}
	}

	/* ---- Decision point: poll silently until the player locks in an answer or walks away ---- */
	function waitForPlayerDecision() {
		clearInterval(pollTimer);
		pollTimer = setInterval(function () {
			if (!running) { clearInterval(pollTimer); return; }
			var v = gv();
			if (v.QuestionSequenceCounter === 6) {
				// Player locked in an answer (1/2/3/4 already handled that + played the "final answer" sound).
				clearInterval(pollTimer);
				step(TIMINGS.afterLockIn, revealAnswerOutcome);
			} else if (v.IsWalkingAway === true && v.walkAwaySequenceCounter > 0) {
				// Player chose Walk Away themselves; just stop autoplay, the Walk Away key
				// finishes its own short reveal sequence on its own (it's self-contained).
				clearInterval(pollTimer);
				running = false;
			}
		}, TIMINGS.pollInterval);
	}

	/* ---- Correct/Wrong reveal, then either loop to the next question or stop (game over/won) ---- */
	function revealAnswerOutcome() {
		key(39); // counter 6 -> 7 (correct path) OR jumps straight to 9 (wrong path)
		var v = gv();
		if (v.QuestionSequenceCounter === 7) {
			step(TIMINGS.afterCorrectReveal, function () {
				key(39); // 7 -> 8 (show amount won)
				step(TIMINGS.beforeNextQuestion, function () {
					key(39); // 8 -> resets to 0 (more questions) or -1 (top prize reached)
					var v2 = gv();
					if (v2.QuestionSequenceCounter === 0) {
						playOutQuestionReveal(); // next question, fully automatic again
					} else {
						running = false; // top prize reached — let the operator take it from here
					}
				});
			});
		} else if (v.QuestionSequenceCounter === 9) {
			step(TIMINGS.afterWrongReveal, function () {
				key(39); // 9 -> reduces winnings, hides straps, IsWalkingAway = true, resets counter to 0
				running = false; // wrong answer: game over, don't start a phantom "next question"
			});
		} else {
			// Unexpected state (e.g. a lifeline mid-animation) — stop rather than risk mis-firing.
			running = false;
		}
	}

	/* ---- Public entry point: call this once, right after the game screen is revealed ---- */
	function start() {
		if (running) { return; }
		running = true;
		playOutQuestionReveal();
	}

	function stop() {
		running = false;
		clearInterval(pollTimer);
	}

	window.WWTBAMAutoPlay = { start: start, stop: stop };

})();
