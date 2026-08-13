function renderMoneyTreeTable(){
	var htmlTableString = "";
	
	for (var i = 14; i >= 0; i--){
		htmlTableString += "<tr id='moneyTreeTr" + (i+1) + "'>";
		
		if(i == 4|| i == 9|| i == 14){
			htmlTableString += "<td class='moneyTreeLevelWhiteTd'>";
		}
		else{
			htmlTableString += "<td class='moneyTreeLevelTd'>";
		}
		
		htmlTableString += (new Intl.NumberFormat('en', { numberingSystem: window.GameVariables.LevelNumberingSystem }).format(i + 1));
		htmlTableString += "</td>"
		htmlTableString += "<td class='moneyTreeDiagonalTd'></td>"
		
		if(i == 4|| i == 9|| i == 14){
			htmlTableString += "<td class='moneyTreeAmountWhiteTd'>"
		}
		else{
			htmlTableString += "<td class='moneyTreeAmountTd'>"
		}
		
		if(i >= window.GameVariables.TopPrizeQuestionNumber - 1)
		{
			if(window.GameVariables.UseTopPrizeText == true){
				htmlTableString += window.GameVariables.TopPrizeText[i];
			}
			else{
				if(window.GameVariables.SecondaryNumberFormatTree == true){
					htmlTableString += window.GameVariables.SecondaryNumberPrefix + new Intl.NumberFormat(window.GameVariables.SecondaryLocaleCode, window.GameVariables.SecondaryFormatOptions).format(window.GameVariables.PrizeAmounts[i]).replace(window.GameVariables.SecondaryReplaceCharacterBefore, window.GameVariables.SecondaryReplaceCharacterAfter).trim() + window.GameVariables.SecondaryNumberSuffix;
				}
				else{
					htmlTableString += window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[i]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix;
				}
			}
		}
		else
		{
			if(window.GameVariables.SecondaryNumberFormatTree == true){
				htmlTableString += window.GameVariables.SecondaryNumberPrefix + new Intl.NumberFormat(window.GameVariables.SecondaryLocaleCode, window.GameVariables.SecondaryFormatOptions).format(window.GameVariables.PrizeAmounts[i]).replace(window.GameVariables.SecondaryReplaceCharacterBefore, window.GameVariables.SecondaryReplaceCharacterAfter).trim() + window.GameVariables.SecondaryNumberSuffix;
			}
			else{
				htmlTableString += window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[i]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix;
			}
		}

		
		htmlTableString += "</td>"
		htmlTableString += "</tr>"
	}
	
	$('.moneyTreeTable').html(htmlTableString);
}

function renderCurrentLevelTable(){
	var htmlTableString = "";
	
	for (var i = 14; i >= 0; i--){
		htmlTableString += "<tr id='currentLevelTr" + (i+1) + "'>";
		
		htmlTableString += "<td class='moneyTreeCurrentLevelTd'>"
		htmlTableString += "~"
		
		htmlTableString += "</td>"
		htmlTableString += "</tr>"
	}
	
	$('.currentLevelTable').html(htmlTableString);
}

function slideInMoneyTree(){
	$('.moneyTreeDiv').transition({perspective:0, 'right': '0px'}, 1000, 'ease-out');
}

function setLevelOnMoneyTree(level){
	$('.moneyTreeLevelWhiteTd').css('color','#FFFFFF');
	$('.moneyTreeLevelWhiteTd').css('text-shadow','2px 2px 5px black, -1px -1px 0px black, 0px -1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, -1px 1px 0px black, 0px 1px 0px black, 1px 1px 0px black');
	$('.moneyTreeAmountWhiteTd').css('color','#FFFFFF');
	$('.moneyTreeAmountWhiteTd').css('text-shadow','2px 2px 5px black, -1px -1px 0px black, 0px -1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, -1px 1px 0px black, 0px 1px 0px black, 1px 1px 0px black');
	$('.moneyTreeLevelTd').css('color','#F99B1C');
	$('.moneyTreeLevelTd').css('text-shadow','2px 2px 5px black, -1px -1px 0px black, 0px -1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, -1px 1px 0px black, 0px 1px 0px black, 1px 1px 0px black');
	$('.moneyTreeAmountTd').css('color','#F99B1C');
	$('.moneyTreeAmountTd').css('text-shadow','2px 2px 5px black, -1px -1px 0px black, 0px -1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, -1px 1px 0px black, 0px 1px 0px black, 1px 1px 0px black');
	$('.moneyTreeDiagonalTd').css('background-image','none');
	$('.moneyTreeDiagonalTd, .moneyTreeDiagonalWhiteTd').css('background-image','none');
	$('.moneyTreeCurrentLevelTd').css('opacity', 0);

	for(var i = 1; i < level; i++){
		var targetId = '#moneyTreeTr' + i;
		var targetCurrentLevel = '#currentLevelTr' + i;
		$(targetId + ' .moneyTreeDiagonalTd').css('background-image','url(' + 'Images/white_diagonal_money_tree.png' +')');
		
		if((i + 1) == level){
			$(targetCurrentLevel + ' .moneyTreeCurrentLevelTd').css('opacity', 1);
			$(targetId + ' .moneyTreeLevelTd, ' + targetId + ' .moneyTreeLevelWhiteTd').css('color','#000000');
			$(targetId + ' .moneyTreeLevelTd, ' + targetId + ' .moneyTreeLevelWhiteTd').css('text-shadow','0px 0px transparent');
			$(targetId + ' .moneyTreeAmountTd, ' + targetId + ' .moneyTreeAmountWhiteTd').css('color','#000000');
			$(targetId + ' .moneyTreeAmountTd, ' + targetId + ' .moneyTreeAmountWhiteTd').css('text-shadow','0px 0px transparent');
			$(targetId + ' .moneyTreeDiagonalTd').css('background-image','url(' + 'Images/white_diagonal_money_tree_highlight.png' +')');
		}
	}
}

function scaleTreeLevels(level){
	var targetId = '#moneyTreeTr' + level;
	var targetCurrentLevel = '#currentLevelTr' + level;
	
	var previousTargetId = '#moneyTreeTr' + (level - 1);
	var previousTargetCurrentLevel = '#currentLevelTr' + (level - 1);
	
	$(targetCurrentLevel + ' .moneyTreeCurrentLevelTd').css('opacity', 1);
	$(targetId + ' .moneyTreeLevelTd, ' + targetId + ' .moneyTreeLevelWhiteTd').css('color','#000000');
	$(targetId + ' .moneyTreeLevelTd, ' + targetId + ' .moneyTreeLevelWhiteTd').css('text-shadow','0px 0px transparent');
	$(targetId + ' .moneyTreeAmountTd, ' + targetId + ' .moneyTreeAmountWhiteTd').css('color','#000000');
	$(targetId + ' .moneyTreeAmountTd, ' + targetId + ' .moneyTreeAmountWhiteTd').css('text-shadow','0px 0px transparent');
	$(targetId + ' .moneyTreeDiagonalTd').css('background-image','url(' + 'Images/white_diagonal_money_tree_highlight.png' +')');
	
	if((level - 1) == 5|| (level - 1) == 10|| (level - 1) == 15){
		$(previousTargetCurrentLevel + ' .moneyTreeCurrentLevelTd').css('opacity', 0);
		$(previousTargetId + ' .moneyTreeLevelWhiteTd').css('color','#FFFFFF');
		$(previousTargetId + ' .moneyTreeLevelWhiteTd').css('text-shadow','2px 2px 5px black, -1px -1px 0px black, 0px -1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, -1px 1px 0px black, 0px 1px 0px black, 1px 1px 0px black');
		$(previousTargetId + ' .moneyTreeAmountWhiteTd').css('color','#FFFFFF');
		$(previousTargetId + ' .moneyTreeAmountWhiteTd').css('text-shadow','2px 2px 5px black, -1px -1px 0px black, 0px -1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, -1px 1px 0px black, 0px 1px 0px black, 1px 1px 0px black');
		$(previousTargetId + ' .moneyTreeDiagonalTd').css('background-image','url(' + 'Images/white_diagonal_money_tree.png' +')');
	}
	else{
		$(previousTargetCurrentLevel + ' .moneyTreeCurrentLevelTd').css('opacity', 0);
		$(previousTargetId + ' .moneyTreeLevelTd').css('color','#F99B1C');
		$(previousTargetId + ' .moneyTreeLevelTd').css('text-shadow','2px 2px 5px black, -1px -1px 0px black, 0px -1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, -1px 1px 0px black, 0px 1px 0px black, 1px 1px 0px black');
		$(previousTargetId + ' .moneyTreeAmountTd').css('color','#F99B1C');
		$(previousTargetId + ' .moneyTreeAmountTd').css('text-shadow','2px 2px 5px black, -1px -1px 0px black, 0px -1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, -1px 1px 0px black, 0px 1px 0px black, 1px 1px 0px black');
		$(previousTargetId + ' .moneyTreeDiagonalTd').css('background-image','url(' + 'Images/white_diagonal_money_tree.png' +')');
	}
	
	if(level < 15){
		window.GameVariables.ScaleTreeTimeout = setTimeout(function(){
			scaleTreeLevels(level + 1);
		}, 250);
	}
}

function unscaleTreeLevels(level){
	clearTimeout(window.GameVariables.ScaleTreeTimeout);
	$('.moneyTreeLevelWhiteTd').css('color','#FFFFFF');
	$('.moneyTreeLevelWhiteTd').css('text-shadow','2px 2px 5px black, -1px -1px 0px black, 0px -1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, -1px 1px 0px black, 0px 1px 0px black, 1px 1px 0px black');
	$('.moneyTreeAmountWhiteTd').css('color','#FFFFFF');
	$('.moneyTreeAmountWhiteTd').css('text-shadow','2px 2px 5px black, -1px -1px 0px black, 0px -1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, -1px 1px 0px black, 0px 1px 0px black, 1px 1px 0px black');
	$('.moneyTreeLevelTd').css('color','#F99B1C');
	$('.moneyTreeLevelTd').css('text-shadow','2px 2px 5px black, -1px -1px 0px black, 0px -1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, -1px 1px 0px black, 0px 1px 0px black, 1px 1px 0px black');
	$('.moneyTreeAmountTd').css('color','#F99B1C');
	$('.moneyTreeAmountTd').css('text-shadow','2px 2px 5px black, -1px -1px 0px black, 0px -1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, -1px 1px 0px black, 0px 1px 0px black, 1px 1px 0px black');
	$('.moneyTreeCurrentLevelTd').css('opacity', 0);
	$('.moneyTreeDiagonalTd').css('background-image','none');
	$('.moneyTreeDiagonalTd, .moneyTreeDiagonalWhiteTd').css('background-image','none');
	setLevelOnMoneyTree(window.GameVariables.QuestionLevel);
}

function showMoneyTree(){
	$('.moneyTreeDiv').css('opacity', 1);
}

function hideMoneyTree(){
	$('.moneyTreeDiv').css('opacity', 0);
}

function hideLevelStrap(){
	$('.currentLevelStrapDiv').transition({perspective:0, 'right':'-832px', 'transform':'scale(0.77)'}, 1000, 'ease-in-out');
}

function showLevelStrap(){
	if(window.GameVariables.UseTopPrizeLevelStrapText == true){
		if(window.GameVariables.QuestionLevel >= window.GameVariables.TopPrizeLevelStrapQuestionNumber){
			$('.currentLevelStrapAmountDiv').html(window.GameVariables.TopPrizeLevelStrapText[window.GameVariables.QuestionLevel - 1]);
		}
		else{
			if(window.GameVariables.UseTopPrizeText == true){
				if(window.GameVariables.QuestionLevel >= window.GameVariables.TopPrizeQuestionNumber){
					$('.currentLevelStrapAmountDiv').html(window.GameVariables.TopPrizeText[window.GameVariables.QuestionLevel - 1]);
				}
				else{
					if(window.GameVariables.SecondaryNumberFormatLevelStrap == true){
						$('.currentLevelStrapAmountDiv').html(window.GameVariables.SecondaryNumberPrefix + new Intl.NumberFormat(window.GameVariables.SecondaryLocaleCode, window.GameVariables.SecondaryFormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.SecondaryReplaceCharacterBefore, window.GameVariables.SecondaryReplaceCharacterAfter).trim() + window.GameVariables.SecondaryNumberSuffix);
					}
					else{
						$('.currentLevelStrapAmountDiv').html(window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix);
					}
				}
			}
			else{
				if(window.GameVariables.SecondaryNumberFormatLevelStrap == true){
					$('.currentLevelStrapAmountDiv').html(window.GameVariables.SecondaryNumberPrefix + new Intl.NumberFormat(window.GameVariables.SecondaryLocaleCode, window.GameVariables.SecondaryFormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.SecondaryReplaceCharacterBefore, window.GameVariables.SecondaryReplaceCharacterAfter).trim() + window.GameVariables.SecondaryNumberSuffix);
				}
				else{
					$('.currentLevelStrapAmountDiv').html(window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix);
				}
			}
		}
	}
	else{
		if(window.GameVariables.SecondaryNumberFormatLevelStrap == true){
			$('.currentLevelStrapAmountDiv').html(window.GameVariables.SecondaryNumberPrefix + new Intl.NumberFormat(window.GameVariables.SecondaryLocaleCode, window.GameVariables.SecondaryFormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.SecondaryReplaceCharacterBefore, window.GameVariables.SecondaryReplaceCharacterAfter).trim() + window.GameVariables.SecondaryNumberSuffix);
		}
		else{
			$('.currentLevelStrapAmountDiv').html(window.GameVariables.NumberPrefix + new Intl.NumberFormat(window.GameVariables.LocaleCode, window.GameVariables.FormatOptions).format(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1]).replace(window.GameVariables.ReplaceCharacterBefore, window.GameVariables.ReplaceCharacterAfter).trim() + window.GameVariables.NumberSuffix);
		}
	}
	$('.currentLevelStrapDiv').transition({perspective:0, 'right':'-85px', 'transform':'scale(0.77)'}, 1000, 'ease-in-out');
}

function animateLevelStrapGlow(){
	
}







