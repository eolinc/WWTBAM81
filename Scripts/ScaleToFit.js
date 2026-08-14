/**********************************************************************************************************
 * ScaleToFit.js
 * The game (and all our overlays) are built on a fixed 1920x1080 stage with no responsive system.
 * This scales the whole page uniformly to fit any screen (phone, tablet, desktop) while keeping the
 * exact same layout/proportions — nothing in the game or menus needs to know this is happening.
 **********************************************************************************************************/
(function () {

	var STAGE_WIDTH = 1920;
	var STAGE_HEIGHT = 1080;

	function applyScale() {
		if (!document.body) { return; }

		var scale = Math.min(window.innerWidth / STAGE_WIDTH, window.innerHeight / STAGE_HEIGHT);
		var offsetX = (window.innerWidth - (STAGE_WIDTH * scale)) / 2;
		var offsetY = (window.innerHeight - (STAGE_HEIGHT * scale)) / 2;

		document.body.style.position = 'fixed';
		document.body.style.left = offsetX + 'px';
		document.body.style.top = offsetY + 'px';
		document.body.style.transformOrigin = '0 0';
		document.body.style.transform = 'scale(' + scale + ')';
		document.documentElement.style.background = '#000000';
	}

	if (document.body) { applyScale(); }
	document.addEventListener('DOMContentLoaded', applyScale);
	window.addEventListener('resize', applyScale);
	window.addEventListener('orientationchange', applyScale);

})();
