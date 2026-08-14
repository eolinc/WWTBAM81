/**********************************************************************************************************
 * IntroVideoManager.js
 * Plays a full-screen, controls-less, non-skippable MP4 right after "GIOCA", before the game starts.
 *
 * >>> Put your video file here:  Videos/intro.mp4  <<<
 * (create the "Videos" folder next to "Scripts"/"Images"/"Sounds" and drop your file in, named intro.mp4 —
 *  or change VIDEO_PATH below to match your filename).
 *
 * If the file is missing or fails to load, the game starts anyway after a short wait instead of getting
 * stuck, so a missing video never blocks the player.
 **********************************************************************************************************/
(function () {

	var VIDEO_PATH = "Videos/intro.mp4";
	var MISSING_FILE_FALLBACK_MS = 4000; // if the video can't load at all, give up waiting after this long
	var ABSOLUTE_FALLBACK_MS = 20000;    // absolute ceiling: never block the player longer than this, no matter what

	var $overlay = null;

	function play(onDone) {
		if (window.WWTBAMLog) { WWTBAMLog('IntroVideo: play() chiamato'); }
		var finished = false;
		function finish() {
			if (finished) { return; }
			finished = true;
			if (window.WWTBAMLog) { WWTBAMLog('IntroVideo: finish() -> avvio gioco'); }
			if ($overlay) { $overlay.remove(); $overlay = null; }
			$(document).off('contextmenu.introvideo keydown.introvideo');
			onDone();
		}

		$overlay = $(
			'<div class="introVideoOverlayDiv">' +
				'<video class="introVideoTag" src="' + VIDEO_PATH + '" playsinline autoplay ' +
				'disablepictureinpicture controlslist="nodownload noplaybackrate nofullscreen"></video>' +
			'</div>'
		);
		$('body').append($overlay);

		var videoEl = $overlay.find('video')[0];

		// Non-skippable: block right-click (save/inspect) and every key while it plays.
		// No click/tap handler is bound on the overlay at all, so tapping the screen does nothing.
		$(document).on('contextmenu.introvideo', function (e) { e.preventDefault(); });
		$(document).on('keydown.introvideo', function (e) { e.preventDefault(); e.stopPropagation(); });

		videoEl.addEventListener('ended', finish);
		videoEl.addEventListener('error', function () {
			if (window.WWTBAMLog) { WWTBAMLog('IntroVideo: errore caricamento video (' + VIDEO_PATH + ' non trovato?)'); }
			finish();
		});
		videoEl.addEventListener('loadedmetadata', function () {
			if (window.WWTBAMLog) { WWTBAMLog('IntroVideo: metadata caricata, durata=' + videoEl.duration + 's'); }
			// Now that we know the real duration, replace the generic absolute fallback with one
			// sized to the actual video (+5s buffer) so a valid, longer intro is never cut short.
			clearTimeout(absoluteFallbackTimer);
			var dur = (isFinite(videoEl.duration) && videoEl.duration > 0) ? videoEl.duration * 1000 : ABSOLUTE_FALLBACK_MS;
			absoluteFallbackTimer = setTimeout(function () {
				if (!finished) {
					if (window.WWTBAMLog) { WWTBAMLog('IntroVideo: timeout assoluto raggiunto, forzo avvio gioco'); }
					finish();
				}
			}, dur + 5000);
		});

		var playPromise = videoEl.play();
		if (playPromise && typeof playPromise.catch === 'function') {
			playPromise.catch(function (err) {
				if (window.WWTBAMLog) { WWTBAMLog('IntroVideo: play() rifiutato (' + err.name + '), riprovo muto'); }
				// Autoplay with sound blocked by the browser: retry muted so the intro still plays visually.
				videoEl.muted = true;
				videoEl.play().catch(function () { finish(); });
			});
		}

		// Safety net: if the file is missing/unplayable and no 'error'/'ended' ever fires, don't trap the player.
		setTimeout(function () {
			if (window.WWTBAMLog) { WWTBAMLog('IntroVideo: check di sicurezza, readyState=' + videoEl.readyState + ' paused=' + videoEl.paused); }
			if (!finished && (videoEl.readyState === 0 || videoEl.error)) { finish(); }
		}, MISSING_FILE_FALLBACK_MS);

		// Absolute safety net: no matter what state the video is in, never trap the player forever.
		// (Re-armed with the real duration as soon as 'loadedmetadata' fires above — see there.)
		var absoluteFallbackTimer = setTimeout(function () {
			if (!finished) {
				if (window.WWTBAMLog) { WWTBAMLog('IntroVideo: timeout assoluto raggiunto, forzo avvio gioco'); }
				finish();
			}
		}, ABSOLUTE_FALLBACK_MS);
	}

	window.WWTBAMIntroVideo = { play: play };

})();
