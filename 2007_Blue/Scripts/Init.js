$(document).ready(function(){
	init();
});

function init(){
	/* ***DO NOT TAMPER WITH ANYTHING IS THIS FILE UNLESS YOU KNOW WHAT IT DOES OR IS DOING!*** */
	getContestantsForGame();
	renderMoneyTreeTable();
	renderCurrentLevelTable();
	setStartingQuestionLevel(window.GameVariables.StartingQuestionLevel);
	setLevelOnMoneyTree(window.GameVariables.QuestionLevel);
	
	$('.totalPrizeMoneyWonDiv').html(accounting.formatMoney(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 2], "$", 0));
	
	/* Set initial transitions on certain elements */
	$('.answerStrapLifeLineCenterContainerDiv').transition({perspective:0, scale:[0.1, 0.1], opacity:0}, 1);
	$('.lifelineGradientCenterImg').transition({perspective:0, rotate:[0]}, 1, 'linear');
	$('.ffLifeLine .lifelineGradientTreeImg').transition({perspective:0, rotate:[135]}, 1, 'linear');
	$('.ddLifeLine .lifelineGradientTreeImg').transition({perspective:0, rotate:[135]}, 1, 'linear');
	$('.pafLifeLine .lifelineGradientTreeImg').transition({perspective:0, rotate:[135]}, 1, 'linear');
	$('.ataLifeLine .lifelineGradientTreeImg').transition({perspective:0, rotate:[135]}, 1, 'linear');
	$('.stqLifeLine .lifelineGradientTreeImg').transition({perspective:0, rotate:[135]}, 1, 'linear');
	$('#logoBeam1Img').transition({perspective:0, rotate:"-=11.25"}, 1, 'linear');
	$('#graphBarA').css('height', "0px");
	$('#graphBarB').css('height', "0px");
	$('#graphBarC').css('height', "0px");
	$('#graphBarD').css('height', "0px");
	$('#graphPercentA').html("");
	$('#graphPercentB').html("");
	$('#graphPercentC').html("");
	$('#graphPercentD').html("");
	
	getAllQuestionsForGame();
	showMillionaireLogo();
	
	if(window.GameVariables.IsPAFLifeLineUsed == true){
		pafLifeLineDisable();
	}
	
	if(window.GameVariables.IsFFLifeLineUsed == true){
		ffLifeLineDisable();
	}
	
	if(window.GameVariables.IsATALifeLineUsed == true){
		ataLifeLineDisable();
	}
	
	if(window.GameVariables.IsSTQLifeLineUsed == true || window.GameVariables.IsSTQLifeLineActiveAtStart == true){
		stqLifeLineSlideIn();
		stqLifeLineDisable();
		setQuestion(true);
	}
	else if(window.GameVariables.QuestionLevel >= window.GameVariables.STQUnlockedLevel){
		stqLifeLineSlideIn();
	}
	
	if(window.GameVariables.IsDDLifeLineUsed == true){
		ddLifeLineDisable();
	}
	
	if(window.GameVariables.ReplaceFFwithDD == true){
		$('.ffLifeLine').css('opacity', 0);
		$('.ffStrapLifeLine').css('opacity', 0);
		$('.ddLifeLine').css('opacity', 1);
		$('.ddStrapLifeLine').css('opacity', 1);
	}
	else{
		$('.ffLifeLine').css('opacity', 1);
		$('.ffStrapLifeLine').css('opacity', 1);
		$('.ddLifeLine').css('opacity', 0);
		$('.ddStrapLifeLine').css('opacity', 0);
	}
	
	if(window.GameVariables.ContestantFirstName != ""){
		$('.contestantNameAndLocationDiv .contestantNameP').html(window.GameVariables.ContestantFirstName + " " + window.GameVariables.ContestantLastName);
		$('.contestantNameAndLocationDiv .contestantLocationP').html(window.GameVariables.ContestantLocation);
		$('.millionaireWinnerNameDiv').html(window.GameVariables.ContestantFirstName + " " + window.GameVariables.ContestantLastName);
	}
	
	$('#pafRing1Img').transition({perspective:480, rotate:"120"}, 1, 'linear');
	$('#pafRing2Img').transition({perspective:480, rotateY:"-50", rotateZ:"125"}, 1, 'linear');
	$('#pafRing3Img').transition({perspective:480, rotateX:"60", rotateZ:"120"}, 1, 'linear');
	$('#pafRing4Img').transition({perspective:480, rotateX:"75", rotateY:"313", rotateZ:"185"}, 1, 'linear');
	
	$('.totalPrizeDiv').html(window.GameVariables.TotalPrizeText);
	$('.millionaireWinnerDiv').html(window.GameVariables.MillionaireText);
	$('.pafClockTimeDiv').html(new Intl.NumberFormat('en', { numberingSystem: window.GameVariables.PaFNumberingSystem }).format(30));
	
	$('.moneyTreeAmountTd').css('transform','scaleX(' + window.GameVariables.TreeTextScale / 100 + ')');
	$('.moneyTreeAmountWhiteTd').css('transform','scaleX(' + window.GameVariables.TreeTextScale / 100 + ')');
	$('.currentLevelTable').css({'width':window.GameVariables.TreeHighlightWidth});
	document.querySelector('.currentLevelStrapAmountDiv').style.scale = window.GameVariables.CurrentLevelTextScale + '% 100%';
	document.querySelector('.winningsP').style.scale = window.GameVariables.WinTextScale + '% 100%';
	document.querySelector('.totalPrizeMoneyWonDiv').style.scale = window.GameVariables.TPMTextScale + '% 100%';
	document.querySelector('.millionaireWinnerDiv').style.scale = window.GameVariables.TPWTextScale + '% 100%';
	
	startGeneralSound("main_theme.mp3");
}

function QuestionAndAnswer(){
	this.Category = null;
	this.Question = null;
	this.AnswerA = null;
	this.AnswerB = null;
	this.AnswerC = null;
	this.AnswerD = null;
	this.CorrectAnswer = null;
}

function setStartingQuestionLevel(level){
	window.GameVariables.QuestionLevel = level;
}

function getAllQuestionsForGame(){
	$.ajax({
        type: "GET",
        url: "Questions/questions.xml",
        dataType: "xml",
		async: false,
        success: function(xml) {
			$(xml).find('question').each(function(){
				
				var qAndA = new QuestionAndAnswer();
				
				qAndA.Category = $(this).find('category')[0].textContent;
				qAndA.Question = $(this).find('text')[0].textContent.replace("++++","<br />");
				qAndA.AnswerA = $(this).find('a')[0].textContent;
				qAndA.AnswerB = $(this).find('b')[0].textContent;
				qAndA.AnswerC = $(this).find('c')[0].textContent;
				qAndA.AnswerD = $(this).find('d')[0].textContent;
				
				if($(this).find('a')[0].attributes[0].value == "yes"){
					qAndA.CorrectAnswer = "a";
				}
				else if($(this).find('b')[0].attributes[0].value == "yes"){
					qAndA.CorrectAnswer = "b";
				}
				else if($(this).find('c')[0].attributes[0].value == "yes"){
					qAndA.CorrectAnswer = "c";
				}
				else if($(this).find('d')[0].attributes[0].value == "yes"){
					qAndA.CorrectAnswer = "d";
				}
				
				window.GameVariables.QuestionsAndAnswers.push(qAndA);
			});
			
			/*for(var i = 0; i < 15; i++){
				var targetCategoryP = ".categoryP" + (i+1);
				$(targetCategoryP).html(window.GameVariables.QuestionsCategoriesAndAnswers[i].Category);
			}*/
        },
		error: function(e){
			var error = e;
		}
    });
	
	$.ajax({
        type: "GET",
        url: "Questions/switchQuestions.xml",
        dataType: "xml",
		async: false,
        success: function(xml) {
			$(xml).find('question').each(function(){
				
				var qAndA = new QuestionAndAnswer();
				
				qAndA.Category = $(this).find('category')[0].textContent;
				qAndA.Question = $(this).find('text')[0].textContent.replace("++++","<br />");
				qAndA.AnswerA = $(this).find('a')[0].textContent;
				qAndA.AnswerB = $(this).find('b')[0].textContent;
				qAndA.AnswerC = $(this).find('c')[0].textContent;
				qAndA.AnswerD = $(this).find('d')[0].textContent;
				
				if($(this).find('a')[0].attributes[0].value == "yes"){
					qAndA.CorrectAnswer = "a";
				}
				else if($(this).find('b')[0].attributes[0].value == "yes"){
					qAndA.CorrectAnswer = "b";
				}
				else if($(this).find('c')[0].attributes[0].value == "yes"){
					qAndA.CorrectAnswer = "c";
				}
				else if($(this).find('d')[0].attributes[0].value == "yes"){
					qAndA.CorrectAnswer = "d";
				}
				
				window.GameVariables.SwitchQuestionsAndAnswers.push(qAndA);
			});
			
			/*for(var i = 0; i < 15; i++){
				var targetCategoryP = ".categoryP" + (i+1);
				$(targetCategoryP).html(window.GameVariables.QuestionsCategoriesAndAnswers[i].Category);
			}*/
        }
    });

	/*
	* The commented out section of code is use to call to a server to obtain a dataset of questions.
	* You must know how to do this own your own. There is no perfect way that I can develope code (nor will I)
	* that obtains your questions for you from a server. If you are unsure on how to do this then you will have to
	* stick with the original method above using XML files.
	*/
	/*$.ajax({
		type: "POST",
		url: "",
		data: data,
		async: true,
		contentType: "application/json; charset=utf-8",
        dataType: "json",
		success: function(response){
			
		},
		error: function(e){
			if(e.message === null || e.message === undefined){
				alert(e.Message);
			}
			else{
				alert(e.message);
			}
		}
	});*/
}