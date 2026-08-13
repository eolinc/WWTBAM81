/**********************************************************************************************************
 * TouchControlsManager.js
 * On-screen touch/mouse panel that mirrors every key handled by KeyboardController.js.
 * It does not duplicate or reimplement any game logic: every button calls the exact same
 * handleGameControllerKey() function the real keyboard uses, via window.triggerGameControllerKey().
 * Uses Pointer Events only (covers mouse + touch with a single handler, no duplicated events).
 **********************************************************************************************************/
(function () {

	// One entry per key actually handled by KeyboardController.js (arrow-up/38 is intentionally unused there).
	var CONTROLS = [
		{ code: 65, label: "A", title: "Ask the Audience" },
		{ code: 70, label: "F", title: "Fifty-Fifty" },
		{ code: 80, label: "P", title: "Phone a Friend" },
		{ code: 83, label: "S", title: "Switch the Question" },
		{ code: 68, label: "D", title: "Double Dip" },
		{ code: 49, label: "1", title: "Lock in A" },
		{ code: 50, label: "2", title: "Lock in B" },
		{ code: 51, label: "3", title: "Lock in C" },
		{ code: 52, label: "4", title: "Lock in D" },
		{ code: 85, label: "U", title: "Undo / restart question" },
		{ code: 39, label: "\u2192", title: "Next question" },
		{ code: 37, label: "\u2190", title: "Fastest Finger / show-hide tree" },
		{ code: 40, label: "\u2193", title: "Total prize money" },
		{ code: 76, label: "L", title: "Show/hide lifelines" },
		{ code: 77, label: "M", title: "Playing for..." },
		{ code: 78, label: "N", title: "Contestant name" },
		{ code: 69, label: "E", title: "Explain rules" },
		{ code: 67, label: "C", title: "Commercial break" },
		{ code: 71, label: "G", title: "Pause / game over" },
		{ code: 81, label: "Q", title: "Resume" },
		{ code: 87, label: "W", title: "Walk away" }
	];

	var $panel, $toggle, panelVisible = true;

	function buildPanel() {
		$panel = $('<div class="touchControlsPanelDiv"></div>');
		CONTROLS.forEach(function (c) {
			var $btn = $('<div class="touchControlBtn" data-code="' + c.code + '" title="' + c.title + '"><span>' + c.label + '</span></div>');
			$panel.append($btn);
		});
		$('body').append($panel);

		$toggle = $('<div class="touchControlsToggleDiv" title="Mostra/nascondi comandi">\u2699</div>');
		$('body').append($toggle);

		$panel.off('pointerup.touchctrl').on('pointerup.touchctrl', '.touchControlBtn', function (e) {
			e.preventDefault();
			var code = parseInt($(this).attr('data-code'), 10);
			if (typeof window.triggerGameControllerKey === 'function') {
				window.triggerGameControllerKey(code);
			}
			$(this).addClass('touchControlBtnActive');
			var $b = $(this);
			setTimeout(function () { $b.removeClass('touchControlBtnActive'); }, 150);
		});

		$toggle.off('pointerup.touchctrl').on('pointerup.touchctrl', function (e) {
			e.preventDefault();
			panelVisible = !panelVisible;
			$panel.toggleClass('touchControlsPanelHidden', !panelVisible);
		});
	}

	function show() {
		if (!$panel) { buildPanel(); }
		$panel.css('display', 'flex');
		$toggle.css('display', 'flex');
	}

	function hide() {
		if ($panel) { $panel.css('display', 'none'); }
		if ($toggle) { $toggle.css('display', 'none'); }
	}

	// Shown only once the player leaves the Main Menu and starts a game.
	window.WWTBAMTouchControls = { show: show, hide: hide };

})();
