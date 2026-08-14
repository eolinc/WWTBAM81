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
			$box.style.cssText = 'position:fixed;left:0;right:0;bottom:0;background:rgba(20,20,20,0.92);' +
				'color:#fff;font-family:monospace;font-size:12px;padding:6px 10px;z-index:2147483647;' +
				'max-height:40%;overflow:auto;white-space:pre-wrap;';
			document.body.appendChild($box);
		}
	}

	function showError(message) {
		ensureBox();
		var line = document.createElement('div');
		line.style.color = '#ff6b6b';
		line.textContent = message;
		$box.appendChild(line);
		$box.scrollTop = $box.scrollHeight;
	}

	function log(message) {
		ensureBox();
		var line = document.createElement('div');
		line.style.color = '#7fd3ff';
		line.textContent = new Date().toLocaleTimeString() + '  ' + message;
		$box.appendChild(line);
		$box.scrollTop = $box.scrollHeight;
	}

	window.addEventListener('error', function (e) {
		showError('ERRORE: ' + e.message + ' (' + (e.filename || '').split('/').pop() + ':' + e.lineno + ')');
	});
	window.addEventListener('unhandledrejection', function (e) {
		showError('ERRORE (promise): ' + (e.reason && e.reason.message ? e.reason.message : e.reason));
	});

	window.WWTBAMLog = log;
})();
