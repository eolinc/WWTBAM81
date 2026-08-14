/**********************************************************************************************************
 * MenuManager.js
 * Main Menu system, built on top of the existing controller.
 * Reuses the game's own graphics (Full_Answer_Strap, Large_Strap, Millionaire_Background, logo)
 * instead of introducing any new/foreign UI design.
 *
 * Keyboard : Up/Down/Left/Right to move, Enter/Space to select, Esc to go back.
 * Mouse    : click on an item.
 * Touch    : tap on an item (Pointer Events, no duplicated handlers).
 *
 * This file is additive: it does not modify game logic in the other Scripts files.
 **********************************************************************************************************/
(function () {

	/* ---------------------------------------------------------------------------------------------
	 * 1. LOCALIZATION (menu-only, for now; full in-game localization is a later phase)
	 * ------------------------------------------------------------------------------------------- */
	var MenuText = {
		it: {
			title: "MENU PRINCIPALE",
			play: "GIOCA", mode: "MODALITA'", language: "LINGUA", version: "VERSIONE",
			rules: "REGOLE", settings: "IMPOSTAZIONI", stats: "STATISTICHE",
			controls: "COMANDI", credits: "CREDITI", quit: "ESCI", back: "INDIETRO",
			modeBody: "Modalita' Classica \u2013 nessun limite di tempo.\n(La selezione tra le modalita' disponibili sara' attivata con il sistema profili.)",
			versionBody: "Pacchetti grafici disponibili in questo progetto:\n\u2022 2007 Blue (15 domande)\n\u2022 2007 Blue (12 domande)\n\u2022 2010 UK\n\u2022 2010 UK Clock (12 domande)\n(Il cambio automatico sara' gestito dal Country Profile Manager.)",
			rulesBody: "Rispondi a tutte le domande per vincere il montepremi finale. Puoi usare i jolly a disposizione in qualsiasi momento durante una domanda attiva. Un errore ti fa scendere all'ultimo traguardo raggiunto.",
			settingsBody: "Volume musica del menu",
			statsPlayed: "Partite giocate", statsWins: "Vittorie", statsBest: "Miglior premio",
			controlsBody: "Tastiera: frecce per muoversi, Invio per confermare, Esc per tornare indietro.\nMouse: clic sulla voce desiderata.\nTocco: tocca la voce desiderata sullo schermo.",
			creditsBody: "Progetto realizzato dall'utente. Grafica, audio e domande forniti dal proprietario del progetto.",
			quitConfirm: "Vuoi davvero uscire?",
			playSubmenuTitle: "CHE PARTITA VUOI GIOCARE?",
			playClassic: "Millionaire Classico",
			volumeLabel: "Volume musica"
		},
		en: {
			title: "MAIN MENU",
			play: "PLAY", mode: "MODE", language: "LANGUAGE", version: "VERSION",
			rules: "RULES", settings: "SETTINGS", stats: "STATISTICS",
			controls: "CONTROLS", credits: "CREDITS", quit: "QUIT", back: "BACK",
			modeBody: "Classic Mode \u2013 no time limit.\n(Switching between available modes will be enabled by the profile system.)",
			versionBody: "Graphic packages available in this project:\n\u2022 2007 Blue (15 questions)\n\u2022 2007 Blue (12 questions)\n\u2022 2010 UK\n\u2022 2010 UK Clock (12 questions)\n(Automatic switching will be handled by the Country Profile Manager.)",
			rulesBody: "Answer every question to win the final prize. You may use your lifelines at any time during an active question. A wrong answer drops you to your last safe milestone.",
			settingsBody: "Menu music volume",
			statsPlayed: "Games played", statsWins: "Wins", statsBest: "Best prize",
			controlsBody: "Keyboard: arrow keys to move, Enter to confirm, Esc to go back.\nMouse: click the item you want.\nTouch: tap the item you want.",
			creditsBody: "Project built by the owner. Graphics, audio and questions provided by the project owner.",
			quitConfirm: "Do you really want to quit?",
			playSubmenuTitle: "WHAT TYPE OF GAME WOULD YOU LIKE TO PLAY?",
			playClassic: "Classic Millionaire",
			volumeLabel: "Music volume"
		},
		fr: {
			title: "MENU PRINCIPAL",
			play: "JOUER", mode: "MODE", language: "LANGUE", version: "VERSION",
			rules: "REGLES", settings: "PARAMETRES", stats: "STATISTIQUES",
			controls: "COMMANDES", credits: "CREDITS", quit: "QUITTER", back: "RETOUR",
			modeBody: "Mode Classique \u2013 sans limite de temps.\n(Le choix entre les modes sera active par le systeme de profils.)",
			versionBody: "Packs graphiques disponibles dans ce projet :\n\u2022 2007 Blue (15 questions)\n\u2022 2007 Blue (12 questions)\n\u2022 2010 UK\n\u2022 2010 UK Clock (12 questions)\n(Le changement automatique sera gere par le Country Profile Manager.)",
			rulesBody: "Repondez a toutes les questions pour remporter le prix final. Vous pouvez utiliser vos jokers a tout moment pendant une question active. Une mauvaise reponse vous ramene a votre dernier palier acquis.",
			settingsBody: "Volume de la musique du menu",
			statsPlayed: "Parties jouees", statsWins: "Victoires", statsBest: "Meilleur gain",
			controlsBody: "Clavier : fleches pour se deplacer, Entree pour valider, Echap pour revenir.\nSouris : cliquez sur l'element voulu.\nTactile : touchez l'element voulu.",
			creditsBody: "Projet realise par le proprietaire. Graphismes, audio et questions fournis par le proprietaire du projet.",
			quitConfirm: "Voulez-vous vraiment quitter ?",
			playSubmenuTitle: "QUEL TYPE DE PARTIE VOULEZ-VOUS JOUER ?",
			playClassic: "Millionaire Classique",
			volumeLabel: "Volume de la musique"
		},
		de: {
			title: "HAUPTMENU",
			play: "SPIELEN", mode: "MODUS", language: "SPRACHE", version: "VERSION",
			rules: "REGELN", settings: "EINSTELLUNGEN", stats: "STATISTIK",
			controls: "STEUERUNG", credits: "CREDITS", quit: "BEENDEN", back: "ZURUECK",
			modeBody: "Klassischer Modus \u2013 kein Zeitlimit.\n(Die Auswahl zwischen den Modi wird durch das Profilsystem aktiviert.)",
			versionBody: "Verfuegbare Grafikpakete in diesem Projekt:\n\u2022 2007 Blue (15 Fragen)\n\u2022 2007 Blue (12 Fragen)\n\u2022 2010 UK\n\u2022 2010 UK Clock (12 Fragen)\n(Die automatische Umschaltung uebernimmt der Country Profile Manager.)",
			rulesBody: "Beantworte alle Fragen, um den Hauptgewinn zu erhalten. Du kannst deine Joker jederzeit waehrend einer aktiven Frage einsetzen. Eine falsche Antwort wirft dich auf deine letzte sichere Stufe zurueck.",
			settingsBody: "Musiklautstaerke im Menu",
			statsPlayed: "Gespielte Spiele", statsWins: "Siege", statsBest: "Bester Gewinn",
			controlsBody: "Tastatur: Pfeiltasten zum Bewegen, Enter zum Bestaetigen, Esc zum Zurueckgehen.\nMaus: Klicke auf den gewuenschten Punkt.\nTouch: Tippe auf den gewuenschten Punkt.",
			creditsBody: "Projekt vom Eigentuemer erstellt. Grafik, Audio und Fragen vom Projekteigentuemer bereitgestellt.",
			quitConfirm: "Moechtest du wirklich beenden?",
			playSubmenuTitle: "WELCHE SPIELART MOECHTEST DU SPIELEN?",
			playClassic: "Millionaire Klassisch",
			volumeLabel: "Musiklautstaerke"
		},
		es: {
			title: "MENU PRINCIPAL",
			play: "JUGAR", mode: "MODO", language: "IDIOMA", version: "VERSION",
			rules: "REGLAS", settings: "AJUSTES", stats: "ESTADISTICAS",
			controls: "CONTROLES", credits: "CREDITOS", quit: "SALIR", back: "ATRAS",
			modeBody: "Modo Clasico \u2013 sin limite de tiempo.\n(La seleccion entre modos se activara con el sistema de perfiles.)",
			versionBody: "Paquetes graficos disponibles en este proyecto:\n\u2022 2007 Blue (15 preguntas)\n\u2022 2007 Blue (12 preguntas)\n\u2022 2010 UK\n\u2022 2010 UK Clock (12 preguntas)\n(El cambio automatico lo gestionara el Country Profile Manager.)",
			rulesBody: "Responde todas las preguntas para ganar el premio final. Puedes usar tus comodines en cualquier momento durante una pregunta activa. Una respuesta incorrecta te hace bajar a tu ultimo escalon seguro.",
			settingsBody: "Volumen de la musica del menu",
			statsPlayed: "Partidas jugadas", statsWins: "Victorias", statsBest: "Mejor premio",
			controlsBody: "Teclado: flechas para moverte, Intro para confirmar, Esc para volver.\nRaton: haz clic en el elemento deseado.\nTactil: toca el elemento deseado.",
			creditsBody: "Proyecto realizado por el propietario. Graficos, audio y preguntas proporcionados por el propietario del proyecto.",
			quitConfirm: "\u00bfSeguro que quieres salir?",
			playSubmenuTitle: "\u00bfA QUE TIPO DE PARTIDA QUIERES JUGAR?",
			playClassic: "Millionaire Clasico",
			volumeLabel: "Volumen de la musica"
		}
	};

	var STORAGE_LANG_KEY = "wwtbam_language";
	var STORAGE_STATS_KEY = "wwtbam_statistics";

	function getLanguage() {
		return localStorage.getItem(STORAGE_LANG_KEY) || "it";
	}
	function setLanguage(code) {
		localStorage.setItem(STORAGE_LANG_KEY, code);
	}
	function t() {
		return MenuText[getLanguage()] || MenuText.it;
	}
	function getStats() {
		try {
			return JSON.parse(localStorage.getItem(STORAGE_STATS_KEY)) || { played: 0, wins: 0, best: 0 };
		} catch (e) {
			return { played: 0, wins: 0, best: 0 };
		}
	}

	/* ---------------------------------------------------------------------------------------------
	 * 2. MENU MUSIC (independent Audio channel so it never collides with in-game sounds)
	 * ------------------------------------------------------------------------------------------- */
	var menuMusic = null;
	function startMenuMusic() {
		try {
			stopMenuMusic();
			menuMusic = new Audio("Sounds/explain_rules.mp3");
			menuMusic.loop = true;
			menuMusic.volume = getMenuVolume();
			var p = menuMusic.play();
			if (p && typeof p.catch === 'function') {
				// Chrome sometimes still refuses this even after a user gesture (e.g. if the
				// gesture wasn't a plain click/tap). Not critical — the game works without
				// menu music, so we just swallow it instead of surfacing a false alarm.
				p.catch(function () { });
			}
		} catch (e) { console.log(e); }
	}
	function stopMenuMusic() {
		if (menuMusic) {
			try { menuMusic.pause(); } catch (e) { }
			menuMusic = null;
		}
	}
	function getMenuVolume() {
		var v = localStorage.getItem("wwtbam_menu_volume");
		return v === null ? 0.8 : parseFloat(v);
	}
	function setMenuVolume(v) {
		localStorage.setItem("wwtbam_menu_volume", v);
		if (menuMusic) { menuMusic.volume = v; }
	}

	/* ---------------------------------------------------------------------------------------------
	 * 3. MENU DEFINITION
	 * Each entry: { key: <text key in MenuText>, action: function }
	 * ------------------------------------------------------------------------------------------- */
	var selectedIndex = 0;
	var currentItems = [];
	var currentPanelBody = null; // set when a submenu shows static/body text instead of a grid

	function mainMenuItems() {
		return [
			{ key: "play", action: function () { showPlaySubmenu(); } },
			{ key: "mode", action: function () { showTextPanel(t().mode, t().modeBody); } },
			{ key: "language", action: function () { showLanguagePanel(); } },
			{ key: "version", action: function () { showTextPanel(t().version, t().versionBody); } },
			{ key: "rules", action: function () { showTextPanel(t().rules, t().rulesBody); } },
			{ key: "settings", action: function () { showSettingsListPanel(); } },
			{ key: "stats", action: function () { showStatsPanel(); } },
			{ key: "controls", action: function () { showTextPanel(t().controls, t().controlsBody); } },
			{ key: "credits", action: function () { showTextPanel(t().credits, t().creditsBody); } },
			{ key: "quit", action: function () { quitGame(); } }
		];
	}

	/* ---------------------------------------------------------------------------------------------
	 * 4. RENDERING (reuses .answerStrapDiv / .leftAnswerDiv / .rightAnswerDiv visual language)
	 * ------------------------------------------------------------------------------------------- */
	var $menuRoot, $menuGrid, $menuTitle, $menuPanelBody, $menuBackRow;

	function buildMenuDom() {
		$menuRoot = $(
			'<div class="mainMenuDiv">' +
				'<div class="menuLogoWrapDiv">' +
					'<img src="Images/logo_beam_blue.png" class="menuLogoBeamImg"/>' +
					'<img src="Images/logo.png" class="menuLogoImg"/>' +
				'</div>' +
				'<div class="menuTitleStrapDiv"><table class="menuTitleTable"><tr><td class="menuTitleTd"></td></tr></table></div>' +
				'<div class="menuGridDiv"></div>' +
				'<div class="menuPanelBodyDiv"><p class="menuPanelBodyP"></p></div>' +
			'</div>'
		);
		$('body').append($menuRoot);
		$menuTitle = $menuRoot.find('.menuTitleTd');
		$menuGrid = $menuRoot.find('.menuGridDiv');
		$menuPanelBody = $menuRoot.find('.menuPanelBodyDiv');
	}

	var LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

	function renderRow(leftItem, rightItem, rowIndexBase) {
		var $row = $('<div class="menuAnswerStrapDiv"></div>');

		function buildCell(item, side, globalIndex) {
			if (!item) { return $('<div class="menu' + side + 'Div menuCellEmpty"></div>'); }
			var $cell = $('<div class="menu' + side + 'Div menuCell" data-index="' + globalIndex + '"></div>');
			$cell.append('<span class="menuBadgeSpan">' + (LETTERS[globalIndex] || '') + '</span>');
			$cell.append('<p class="menuItemP">' + item.label + '</p>');
			return $cell;
		}

		$row.append(buildCell(leftItem, 'Left', rowIndexBase));
		$row.append(buildCell(rightItem, 'Right', rowIndexBase + 1));
		return $row;
	}

	function render(title, items, isTextPanel, bodyText) {
		selectedIndex = 0;
		$menuTitle.text(title);
		$menuGrid.empty();
		$menuPanelBody.hide();

		if (isTextPanel) {
			$menuPanelBody.show();
			$menuPanelBody.find('.menuPanelBodyP').html(String(bodyText).replace(/\n/g, '<br/>'));
			var backItem = { key: 'back', label: t().back };
			$menuGrid.append(renderRow(backItem, null, 0));
			currentItems = [{ label: t().back, action: function () {
				volumePanelActive = false;
				(goBackStack.pop() || renderMainMenu)();
			} }];
		} else {
			currentItems = items;
			for (var i = 0; i < items.length; i += 2) {
				$menuGrid.append(renderRow(items[i], items[i + 1], i));
			}
		}

		bindMenuInputHandlers();
		highlightSelection();
	}

	function renderMainMenu() {
		volumePanelActive = false;
		var loc = t();
		var items = mainMenuItems().map(function (it) {
			return { key: it.key, label: loc[it.key], action: it.action };
		});
		render(loc.title, items, false, null);
	}

	function highlightSelection() {
		$menuGrid.find('.menuCell').removeClass('menuCellSelected');
		var $sel = $menuGrid.find('.menuCell[data-index="' + selectedIndex + '"]');
		if ($sel.length === 0) {
			// fall back to nearest existing index (grids may have an odd item count)
			$sel = $menuGrid.find('.menuCell').first();
			selectedIndex = parseInt($sel.attr('data-index'), 10) || 0;
		}
		$sel.addClass('menuCellSelected');
	}

	/* ---------------------------------------------------------------------------------------------
	 * 5. PANELS
	 * ------------------------------------------------------------------------------------------- */
	var goBackStack = [];

	function showTextPanel(title, body) {
		volumePanelActive = false;
		goBackStack.push(renderMainMenu);
		render(title, [], true, body);
	}

	function backItem() {
		return { label: t().back, action: function () { volumePanelActive = false; (goBackStack.pop() || renderMainMenu)(); } };
	}

	function showLanguagePanel() {
		volumePanelActive = false;
		goBackStack.push(renderMainMenu);
		var langs = [
			{ key: 'it', label: 'ITALIANO' }, { key: 'en', label: 'ENGLISH' },
			{ key: 'fr', label: 'FRANCAIS' }, { key: 'de', label: 'DEUTSCH' },
			{ key: 'es', label: 'ESPANOL' }
		];
		var items = langs.map(function (l) {
			return {
				label: l.label + (getLanguage() === l.key ? ' \u2713' : ''),
				action: function () { setLanguage(l.key); renderMainMenu(); }
			};
		});
		items.push(backItem());
		render(t().language, items, false, null);
	}

	function showPlaySubmenu() {
		volumePanelActive = false;
		goBackStack.push(renderMainMenu);
		var loc = t();
		var items = [
			{ label: loc.playClassic, action: function () { startGameFromMenu(); } },
			backItem()
		];
		render(loc.playSubmenuTitle, items, false, null);
	}

	function showSettingsListPanel() {
		volumePanelActive = false;
		goBackStack.push(renderMainMenu);
		var loc = t();
		var volPct = Math.round(getMenuVolume() * 100);
		var items = [
			{
				label: loc.volumeLabel + ': ' + volPct + '%',
				action: function () {
					var next = getMenuVolume() + 0.25;
					if (next > 1.0001) { next = 0; }
					setMenuVolume(next);
					showSettingsListPanel();
					goBackStack.pop(); // re-render in place, don't grow the back-stack each tap
				}
			},
			{ label: loc.language, action: function () { showLanguagePanel(); } },
			backItem()
		];
		render(loc.settings, items, false, null);
	}

	function showStatsPanel() {
		volumePanelActive = false;
		goBackStack.push(renderMainMenu);
		var s = getStats();
		var loc = t();
		var body = loc.statsPlayed + ": " + s.played + "\n" +
			loc.statsWins + ": " + s.wins + "\n" +
			loc.statsBest + ": " + s.best;
		render(loc.stats, [], true, body);
	}

	var volumePanelActive = false;

	/* ---------------------------------------------------------------------------------------------
	 * 6. NAVIGATION: keyboard + mouse + touch (Pointer Events, single handler each -> no duplicates)
	 * ------------------------------------------------------------------------------------------- */
	function moveSelection(delta) {
		var indices = [];
		$menuGrid.find('.menuCell').each(function () { indices.push(parseInt($(this).attr('data-index'), 10)); });
		if (indices.length === 0) { return; }
		var pos = indices.indexOf(selectedIndex);
		if (pos === -1) { pos = 0; }
		pos = (pos + delta + indices.length) % indices.length;
		selectedIndex = indices[pos];
		highlightSelection();
	}

	function activateSelection() {
		var found = null;
		if (currentItems.length === 1) {
			found = currentItems[0];
		} else {
			for (var i = 0; i < currentItems.length; i++) {
				if (i === selectedIndex && currentItems[i]) { found = currentItems[i]; break; }
			}
		}
		if (found && typeof found.action === 'function') { found.action(); }
	}

	function bindMenuInputHandlers() {
		// Mouse + touch: Pointer Events cover both with a single listener (event delegation, rebound-safe)
		$menuGrid.off('pointerup.menu').on('pointerup.menu', '.menuCell', function () {
			var idx = parseInt($(this).attr('data-index'), 10);
			selectedIndex = idx;
			highlightSelection();
			activateSelection();
		});
	}

	function onMenuKeyDown(e) {
		if ($menuRoot.css('display') === 'none') { return; }

		switch (e.keyCode) {
			case 38: case 37: moveSelection(-1); e.preventDefault(); break; // Up / Left
			case 40: case 39: moveSelection(1); e.preventDefault(); break;  // Down / Right
			case 13: case 32: activateSelection(); e.preventDefault(); break; // Enter / Space
			case 27: // Esc
				if (goBackStack.length > 0) { goBackStack.pop()(); }
				e.preventDefault();
				break;
		}
	}

	/* ---------------------------------------------------------------------------------------------
	 * 7. ENTRY / EXIT POINTS
	 * ------------------------------------------------------------------------------------------- */
	function startGameFromMenu() {
		if (window.WWTBAMLog) { WWTBAMLog('Menu: GIOCA premuto'); }
		stopMenuMusic();
		$(document).off('pointerdown.audiounlock keydown.audiounlock');
		$menuRoot.css('display', 'none');
		$(document).off('keydown.menu');

		if (window.WWTBAMIntroVideo) {
			if (window.WWTBAMLog) { WWTBAMLog('Menu: avvio IntroVideo'); }
			window.WWTBAMIntroVideo.play(startActualGame);
		} else {
			if (window.WWTBAMLog) { WWTBAMLog('Menu: IntroVideoManager non trovato, salto sigla'); }
			startActualGame();
		}
	}

	function startActualGame() {
		if (window.WWTBAMLog) { WWTBAMLog('Menu: startActualGame() -> chiamo init()'); }
		if (typeof init === 'function') { init(); } // the original, untouched game init()
		if (window.WWTBAMLog) { WWTBAMLog('Menu: init() completato'); }
		if (window.WWTBAMTouchControls) {
			window.WWTBAMTouchControls.show();
			if (window.WWTBAMLog) { WWTBAMLog('Menu: pannello touch mostrato'); }
		} else if (window.WWTBAMLog) {
			WWTBAMLog('Menu: ATTENZIONE TouchControlsManager non trovato!');
		}

		/* init() leaves the game on the intro "MILLIONAIRE" logo screen, waiting for the
		   operator to press 'C' to reveal the actual question/answer screen (this matches
		   the original controller's behaviour). Since our menu (and now the intro video)
		   already act as the pre-show screen, we trigger that first 'C' press automatically
		   here, then hand off to AutoPlayManager to run the question flow by itself. */
		setTimeout(function () {
			if (window.WWTBAMLog) { WWTBAMLog('Menu: invio tasto C automatico'); }
			if (typeof window.triggerGameControllerKey === 'function') {
				window.triggerGameControllerKey(67);
			} else if (window.WWTBAMLog) {
				WWTBAMLog('Menu: ATTENZIONE triggerGameControllerKey non esiste!');
			}
			setTimeout(function () {
				if (window.WWTBAMLog) { WWTBAMLog('Menu: avvio AutoPlayManager'); }
				if (window.WWTBAMAutoPlay) {
					window.WWTBAMAutoPlay.start();
				} else if (window.WWTBAMLog) {
					WWTBAMLog('Menu: ATTENZIONE AutoPlayManager non trovato!');
				}
			}, 600);
		}, 1200);
	}

	function quitGame() {
		if (confirm(t().quitConfirm)) {
			window.close();
			// Fallback for browsers that block window.close() on tabs not opened by script:
			showTextPanel(t().quit, "");
		}
	}

	function showMainMenu() {
		if (!$menuRoot) { buildMenuDom(); }
		$menuRoot.css('display', 'block');
		$(document).off('keydown.menu').on('keydown.menu', onMenuKeyDown);
		renderMainMenu();
		armAudioUnlock();
		if (window.WWTBAMTouchControls) { window.WWTBAMTouchControls.hide(); }
	}

	/* ---------------------------------------------------------------------------------------------
	 * 8. AUDIO UNLOCK
	 * Browsers block audio.play() before any user gesture on the page (mouse/keyboard/touch).
	 * We simply wait for the first such gesture, then start the menu music.
	 * ------------------------------------------------------------------------------------------- */
	var audioUnlocked = false;
	function armAudioUnlock() {
		if (audioUnlocked) { startMenuMusic(); return; }
		function unlock() {
			audioUnlocked = true;
			startMenuMusic();
			$(document).off('pointerdown.audiounlock keydown.audiounlock');
		}
		$(document).off('pointerdown.audiounlock keydown.audiounlock')
			.on('pointerdown.audiounlock keydown.audiounlock', unlock);
	}

	$(document).ready(function () {
		// Hide the game stage's own audio/visual start-up noise until the player presses GIOCA.
		showMainMenu();
	});

	window.WWTBAMMenu = { show: showMainMenu, setLanguage: setLanguage, getLanguage: getLanguage };

})();
