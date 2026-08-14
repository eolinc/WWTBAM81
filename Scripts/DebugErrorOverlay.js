/**********************************************************************************************************
 * DebugErrorOverlay.js
 * Shows any JavaScript error as a small red banner at the bottom of the screen instead of failing
 * silently, PLUS a step-by-step trace log (window.WWTBAMLog) so we can see exactly where the game
 * flow gets stuck when testing on a phone with no access to the browser console.
 * Purely diagnostic: it doesn't change any game behaviour.
 **********************************************************************************************************/
(function () {
	var $box = null;

	function ensureBox() {
		if (!$box) {
			$box = document.createElement('div');
			$box.style.cssText = 'all:initial;position:fixed !important;left:0;right:0;bottom:0;' +
				'background:rgba(20,20,20,0.95);color:#fff;font-family:monospace;font-size:12px;' +
				'padding:6px 10px;z-index:2147483647;max-height:45%;overflow:auto;';
			document.body.appendChild($box);
		}
	}

	function appendLine(text, color) {
		ensureBox();
		var line = document.createElement('div');
		// Force layout regardless of the page's own global CSS (which makes every <div> absolute).
		line.style.cssText = 'all:initial;display:block !important;position:static !important;' +
			'color:' + color + ' !important;font-family:monospace !important;font-size:12px !important;' +
			'white-space:pre-wrap !important;line-height:1.4 !important;';
		line.textContent = text;
		$box.appendChild(line);
		$box.scrollTop = $box.scrollHeight;
	}

	function showError(message) {
		appendLine(message, '#ff6b6b');
	}

	function log(message) {
		appendLine(new Date().toLocaleTimeString() + '  ' + message, '#7fd3ff');
	}

	window.addEventListener('error', function (e) {
		showError('ERRORE: ' + e.message + ' (' + (e.filename || '').split('/').pop() + ':' + e.lineno + ')');
	});
	window.addEventListener('unhandledrejection', function (e) {
		showError('ERRORE (promise): ' + (e.reason && e.reason.message ? e.reason.message : e.reason));
	});

	window.WWTBAMLog = log;
})();
