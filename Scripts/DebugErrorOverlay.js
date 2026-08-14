/**********************************************************************************************************
 * DebugErrorOverlay.js
 * Shows any JavaScript error as a small red banner at the bottom of the screen instead of failing
 * silently. Useful for testing on a phone, where there is no easy access to the browser console.
 * Purely diagnostic: it doesn't change any game behaviour.
 **********************************************************************************************************/
(function () {
	var $box = null;

	function showError(message) {
		if (!$box) {
			$box = document.createElement('div');
			$box.style.cssText = 'position:fixed;left:0;right:0;bottom:0;background:rgba(160,0,0,0.92);' +
				'color:#fff;font-family:monospace;font-size:13px;padding:8px 12px;z-index:2147483647;' +
				'max-height:35%;overflow:auto;white-space:pre-wrap;';
			document.body.appendChild($box);
		}
		var line = document.createElement('div');
		line.textContent = message;
		$box.appendChild(line);
	}

	window.addEventListener('error', function (e) {
		showError('ERRORE: ' + e.message + ' (' + (e.filename || '').split('/').pop() + ':' + e.lineno + ')');
	});
	window.addEventListener('unhandledrejection', function (e) {
		showError('ERRORE (promise): ' + (e.reason && e.reason.message ? e.reason.message : e.reason));
	});
})();
