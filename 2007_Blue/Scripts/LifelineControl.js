/****************************************************************************************************************/
/* Phone a Friend Life Line Functions */
/****************************************************************************************************************/

function pafPulseLifeLine(){
	$('.pafLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 375, 'ease-out', function(){
		$('.pafLifeLine').transition({perspective:0, scale:[1,1]}, 375, 'ease-in', function(){
			
		});
	});
	
	$('.pafLifeLine .lifelineGradientTreeDiv').transition({perspective:0, opacity: 1}, 0, 'linear', function(){
		setTimeout(function(){
			$('.pafLifeLine .lifelineGradientTreeDiv').transition({perspective:0, opacity: 0}, 100, 'linear');
		}, 650);
		$('.pafLifeLine .lifelineGradientTreeImg').transition({perspective:0, rotate:[-585]}, 750, 'linear', function(){
			$('.pafLifeLine .lifelineGradientTreeImg').transition({perspective:0, rotate:[135]}, 0, 'linear', function(){
				
			});
		});
	});
	
	$('.pafStrapLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 375, 'ease-out', function(){
		$('.pafStrapLifeLine').transition({perspective:0, scale:[1,1]}, 375, 'ease-in', function(){
			
		});
	});
	
	$('.pafStrapLifeLine .lifelineGradientStrapDiv').transition({perspective:0, opacity: 1}, 0, 'linear', function(){
		setTimeout(function(){
			$('.pafStrapLifeLine .lifelineGradientStrapDiv').transition({perspective:0, opacity: 0}, 100, 'linear');
		}, 650);
		$('.pafStrapLifeLine .lifelineGradientStrapImg').transition({perspective:0, rotate:[-585]}, 750, 'linear', function(){
			$('.pafStrapLifeLine .lifelineGradientStrapImg').transition({perspective:0, rotate:[135]}, 0, 'linear', function(){
				
			});
		});
	});
}

function pafLifeLineDisable(){
	if(window.GameVariables.LifelineUsedRed == true){
		$('.pafLifeLine .lifelineFillRedTreeImg').css('opacity', 1);
		$('.pafStrapLifeLine .lifelineFillRedStrapImg').css('opacity', 1);
	}
	else{
		$('.pafLifeLine .lifelineUsedImg').css('opacity', 1);
		$('.pafLifeLine .lifelineTreeImg').css('opacity', 1);
		$('.pafStrapLifeLine .lifelineUsedStrapImg').css('opacity', 1);
		$('.pafStrapLifeLine .lifelineStrapImg').css('opacity', 1);
	}
}

function pafRevealClock(){
	$('.pafClockDiv').transition({perspective:0, opacity: 1, scale:[0.1]}, 0, 'linear', function(){
		$('.pafClockDiv').transition({perspective:0, scale:[0.9]}, 250, 'ease-out', function(){
			setTimeout(function(){
				pafCountDownClock(0);
				startLifelinePassiveSound("paf_countdown.mp3");
				setTimeout(stopLifelineActiveSound, 200);
			}, 0);
		});
	});
}

function pafCountDownClock(timeConsumed){
	if(timeConsumed == 30){
		$('.pafClockTimeDiv').html(new Intl.NumberFormat('en', { numberingSystem: window.GameVariables.PaFNumberingSystem }).format(0));
	}
	else{
		$('.pafClockTimeDiv').html(new Intl.NumberFormat('en', { numberingSystem: window.GameVariables.PaFNumberingSystem }).format(30 - timeConsumed));
	}
	
	$('#pafRing1Img').transition({perspective:480, rotate:"3390"}, 30000, 'cubic-bezier(0.75, 0.1, 0.95, 0.5)');
	$('#pafRing2Img').transition({perspective:480, rotateY:"-50", rotate:"3360"}, 30000, 'cubic-bezier(0.75, 0.1, 0.95, 0.5)');
	$('#pafRing3Img').transition({perspective:480, rotateX:"60", rotate:"3010"}, 30000, 'cubic-bezier(0.75, 0.1, 0.95, 0.5)');
	$('#pafRing4Img').transition({perspective:480, rotateX:"75", rotateY:"313", rotate:"5930"}, 30000, 'cubic-bezier(0.75, 0.1, 0.95, 0.5)');
	
	if(timeConsumed == 30){
		window.GameVariables.PAFClockTimeout = setTimeout(pafHideClock, 500);
	}
	else{
		window.GameVariables.PAFClockTimeout = setTimeout(function(){
			pafCountDownClock(timeConsumed + 1);
		}, 995);
	}
}

function pafEndClockEarly(){
	clearTimeout(window.GameVariables.PAFClockTimeout);
	pafHideClock();
	startLifelineActiveSound("paf_end_call_early.mp3");
}

function pafHideClock(){
	$('.pafClockDiv').transition({perspective:0, scale:[0.1]}, 250, 'ease-in', function(){
		$('.pafClockDiv').transition({perspective:0, opacity:0}, 0, 'linear', function(){
			$('.pafClockTimeDiv').html(new Intl.NumberFormat('en', { numberingSystem: window.GameVariables.PaFNumberingSystem }).format(30));
			$('#pafRing1Img').transition({perspective:480, rotate:"120"}, 1, 'linear');
			$('#pafRing2Img').transition({perspective:480, rotateY:"-50", rotate:"125"}, 1, 'linear');
			$('#pafRing3Img').transition({perspective:480, rotateX:"60", rotate:"120"}, 1, 'linear');
			$('#pafRing4Img').transition({perspective:480, rotateX:"75", rotateY:"313", rotate:"185"}, 1, 'linear');
			window.GameVariables.pafLifeLineSequenceCounter = 0;
			window.GameVariables.CannotLockInFinalAnswer = false;
			pafLifeLineDisable();
		});
	});
	
	setTimeout(playBackgroundSound, 500);
}

/****************************************************************************************************************/
/* Fifty-Fifty Life Line Functions */
/****************************************************************************************************************/

function ffPulseLifeLine(){
	$('.ffLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 375, 'ease-out', function(){
		$('.ffLifeLine').transition({perspective:0, scale:[1,1]}, 375, 'ease-in', function(){
			
		});
	});
	
	$('.ffLifeLine .lifelineGradientTreeDiv').transition({perspective:0, opacity: 1}, 0, 'linear', function(){
		setTimeout(function(){
			$('.ffLifeLine .lifelineGradientTreeDiv').transition({perspective:0, opacity: 0}, 100, 'linear');
		}, 650);
		$('.ffLifeLine .lifelineGradientTreeImg').transition({perspective:0, rotate:[-585]}, 750, 'linear', function(){
			$('.ffLifeLine .lifelineGradientTreeImg').transition({perspective:0, rotate:[135]}, 0, 'linear', function(){
				
			});
		});
	});
	
	$('.ffStrapLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 375, 'ease-out', function(){
		$('.ffStrapLifeLine').transition({perspective:0, scale:[1,1]}, 375, 'ease-in', function(){
			
		});
	});
	
	$('.ffStrapLifeLine .lifelineGradientStrapDiv').transition({perspective:0, opacity: 1}, 0, 'linear', function(){
		setTimeout(function(){
			$('.ffStrapLifeLine .lifelineGradientStrapDiv').transition({perspective:0, opacity: 0}, 100, 'linear');
		}, 650);
		$('.ffStrapLifeLine .lifelineGradientStrapImg').transition({perspective:0, rotate:[-585]}, 750, 'linear', function(){
			$('.ffStrapLifeLine .lifelineGradientStrapImg').transition({perspective:0, rotate:[135]}, 0, 'linear', function(){
				
			});
		});
	});
}

function ffLifeLineDisable(){
	if(window.GameVariables.LifelineUsedRed == true){
		$('.ffLifeLine .lifelineFillRedTreeImg').css('opacity', 1);
		$('.ffStrapLifeLine .lifelineFillRedStrapImg').css('opacity', 1);
	}
	else{
		$('.ffLifeLine .lifelineUsedImg').css('opacity', 1);
		$('.ffLifeLine .lifelineTreeImg').css('opacity', 1);
		$('.ffStrapLifeLine .lifelineUsedStrapImg').css('opacity', 1);
		$('.ffStrapLifeLine .lifelineStrapImg').css('opacity', 1);
	}
}

function ffRemoveTwoWrongAnswers(){
	var canRemoveTwo = true;
	var counter = 0;
		
	if(window.GameVariables.AnswerAIsOut == true || window.GameVariables.AnswerBIsOut == true || window.GameVariables.AnswerCIsOut == true || window.GameVariables.AnswerDIsOut == true){
		canRemoveTwo = false;
	}
	
	if(canRemoveTwo == true){
		ffLifeLineDisable();
	
		while(counter < 2){
			var randomAnswerValue = Math.ceil(Math.random() * 4);
			
			if(randomAnswerValue == 1 && window.GameVariables.AnswerAIsOut == false && window.GameVariables.CurrentCorrectAnswer != "a"){
				$('#answerA .letterP').css('opacity', 0);
				$('#answerA .answerP').css('opacity', 0);
				$('#answerA .diagonalImg').css('opacity', 0);
				window.GameVariables.AnswerAIsOut = true;
				counter++;
			}
			
			if(randomAnswerValue == 2 && window.GameVariables.AnswerBIsOut == false && window.GameVariables.CurrentCorrectAnswer != "b"){
				$('#answerB .letterP').css('opacity', 0);
				$('#answerB .answerP').css('opacity', 0);
				$('#answerB .diagonalImg').css('opacity', 0);
				window.GameVariables.AnswerBIsOut = true;
				counter++;
			}
			
			if(randomAnswerValue == 3 && window.GameVariables.AnswerCIsOut == false && window.GameVariables.CurrentCorrectAnswer != "c"){
				$('#answerC .letterP').css('opacity', 0);
				$('#answerC .answerP').css('opacity', 0);
				$('#answerC .diagonalImg').css('opacity', 0);
				window.GameVariables.AnswerCIsOut = true;
				counter++;
			}
			
			if(randomAnswerValue == 4 && window.GameVariables.AnswerDIsOut == false && window.GameVariables.CurrentCorrectAnswer != "d"){
				$('#answerD .letterP').css('opacity', 0);
				$('#answerD .answerP').css('opacity', 0);
				$('#answerD .diagonalImg').css('opacity', 0);
				window.GameVariables.AnswerDIsOut = true;
				counter++;
			}
		}
	}
}

/****************************************************************************************************************/
/* Ask the Audience Life Line Functions */
/****************************************************************************************************************/

function ataPulseLifeLine(){
	$('.ataLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 375, 'ease-out', function(){
		$('.ataLifeLine').transition({perspective:0, scale:[1,1]}, 375, 'ease-in', function(){
			
		});
	});
	
	$('.ataLifeLine .lifelineGradientTreeDiv').transition({perspective:0, opacity: 1}, 0, 'linear', function(){
		setTimeout(function(){
			$('.ataLifeLine .lifelineGradientTreeDiv').transition({perspective:0, opacity: 0}, 100, 'linear');
		}, 650);
		$('.ataLifeLine .lifelineGradientTreeImg').transition({perspective:0, rotate:[-585]}, 750, 'linear', function(){
			$('.ataLifeLine .lifelineGradientTreeImg').transition({perspective:0, rotate:[135]}, 0, 'linear', function(){
				
			});
		});
	});
	
	$('.ataStrapLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 375, 'ease-out', function(){
		$('.ataStrapLifeLine').transition({perspective:0, scale:[1,1]}, 375, 'ease-in', function(){
			
		});
	});
	
	$('.ataStrapLifeLine .lifelineGradientStrapDiv').transition({perspective:0, opacity: 1}, 0, 'linear', function(){
		setTimeout(function(){
			$('.ataStrapLifeLine .lifelineGradientStrapDiv').transition({perspective:0, opacity: 0}, 100, 'linear');
		}, 650);
		$('.ataStrapLifeLine .lifelineGradientStrapImg').transition({perspective:0, rotate:[-585]}, 750, 'linear', function(){
			$('.ataStrapLifeLine .lifelineGradientStrapImg').transition({perspective:0, rotate:[135]}, 0, 'linear', function(){
				
			});
		});
	});
}

function ataLifeLineDisable(){
	if(window.GameVariables.LifelineUsedRed == true){
		$('.ataLifeLine .lifelineFillRedTreeImg').css('opacity', 1);
		$('.ataStrapLifeLine .lifelineFillRedStrapImg').css('opacity', 1);
	}
	else{
		$('.ataLifeLine .lifelineUsedImg').css('opacity', 1);
		$('.ataLifeLine .lifelineTreeImg').css('opacity', 1);
		$('.ataStrapLifeLine .lifelineUsedStrapImg').css('opacity', 1);
		$('.ataStrapLifeLine .lifelineStrapImg').css('opacity', 1);
	}
}

function slideInATAGraph(){
	$('.ataGraphDiv').transition({perspective:0, opacity: 1}, 250, 'linear');
}

function generateGraphPercentanges(){
	var percentageOfDifficulty = (window.GameVariables.QuestionLevel - 1) * 5;
	var beDevious = (Math.random() * 100) > 90 ? true : false;

	if(window.GameVariables.AnswerAIsOut == true){
		window.GameVariables.AnswerAPercent = 0;
	}
	
	if(window.GameVariables.AnswerBIsOut == true){
		window.GameVariables.AnswerBPercent = 0;
	}
	
	if(window.GameVariables.AnswerCIsOut == true){
		window.GameVariables.AnswerCPercent = 0;
	}
	
	if(window.GameVariables.AnswerDIsOut == true){
		window.GameVariables.AnswerDPercent = 0;
	}
	
	if(beDevious != true){
		if(window.GameVariables.CurrentCorrectAnswer == "a" && window.GameVariables.AnswerAIsOut == false){
			window.GameVariables.AnswerAPercent = Math.ceil(Math.random() * ((100 - (percentageOfDifficulty / 1.5)) - (95 - percentageOfDifficulty)) + (95 - percentageOfDifficulty));
			window.GameVariables.AnswerBPercent = window.GameVariables.AnswerBIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerAPercent));
			window.GameVariables.AnswerCPercent = window.GameVariables.AnswerCIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerAPercent - window.GameVariables.AnswerBPercent));
			window.GameVariables.AnswerDPercent = window.GameVariables.AnswerDIsOut == true ? 0 : 100 - window.GameVariables.AnswerAPercent - window.GameVariables.AnswerBPercent  - window.GameVariables.AnswerCPercent;
		}
		
		if(window.GameVariables.CurrentCorrectAnswer == "b" && window.GameVariables.AnswerBIsOut == false){
			window.GameVariables.AnswerBPercent = Math.ceil(Math.random() * ((100 - (percentageOfDifficulty / 1.5)) - (95 - percentageOfDifficulty)) + (95 - percentageOfDifficulty));
			window.GameVariables.AnswerCPercent = window.GameVariables.AnswerCIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerBPercent));
			window.GameVariables.AnswerDPercent = window.GameVariables.AnswerDIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerBPercent - window.GameVariables.AnswerCPercent));
			window.GameVariables.AnswerAPercent = window.GameVariables.AnswerAIsOut == true ? 0 : 100 - window.GameVariables.AnswerBPercent - window.GameVariables.AnswerCPercent  - window.GameVariables.AnswerDPercent;
		}
		
		if(window.GameVariables.CurrentCorrectAnswer == "c" && window.GameVariables.AnswerCIsOut == false){
			window.GameVariables.AnswerCPercent = Math.ceil(Math.random() * ((100 - (percentageOfDifficulty / 1.5)) - (95 - percentageOfDifficulty)) + (95 - percentageOfDifficulty));
			window.GameVariables.AnswerDPercent = window.GameVariables.AnswerDIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerCPercent));
			window.GameVariables.AnswerAPercent = window.GameVariables.AnswerAIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerCPercent - window.GameVariables.AnswerDPercent));
			window.GameVariables.AnswerBPercent = window.GameVariables.AnswerBIsOut == true ? 0 : 100 - window.GameVariables.AnswerCPercent - window.GameVariables.AnswerDPercent  - window.GameVariables.AnswerAPercent;
		}
		
		if(window.GameVariables.CurrentCorrectAnswer == "d" && window.GameVariables.AnswerDIsOut == false){
			window.GameVariables.AnswerDPercent = Math.ceil(Math.random() * ((100 - (percentageOfDifficulty / 1.5)) - (95 - percentageOfDifficulty)) + (95 - percentageOfDifficulty));
			window.GameVariables.AnswerAPercent = window.GameVariables.AnswerAIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerDPercent));
			window.GameVariables.AnswerBPercent = window.GameVariables.AnswerBIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerDPercent - window.GameVariables.AnswerAPercent));
			window.GameVariables.AnswerCPercent = window.GameVariables.AnswerCIsOut == true ? 0 : 100 - window.GameVariables.AnswerDPercent - window.GameVariables.AnswerAPercent  - window.GameVariables.AnswerBPercent;
		}
	}
	else{
		if(window.GameVariables.AnswerAIsOut == false){
			window.GameVariables.AnswerAPercent = Math.ceil(Math.random() * ((100 - (percentageOfDifficulty / 1.5)) - (95 - percentageOfDifficulty)) + (95 - percentageOfDifficulty));
			window.GameVariables.AnswerBPercent = window.GameVariables.AnswerBIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerAPercent));
			window.GameVariables.AnswerCPercent = window.GameVariables.AnswerCIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerAPercent - window.GameVariables.AnswerBPercent));
			window.GameVariables.AnswerDPercent = window.GameVariables.AnswerDIsOut == true ? 0 : 100 - window.GameVariables.AnswerAPercent - window.GameVariables.AnswerBPercent  - window.GameVariables.AnswerCPercent;
		}
		
		if(window.GameVariables.AnswerBIsOut == false){
			window.GameVariables.AnswerBPercent = Math.ceil(Math.random() * ((100 - (percentageOfDifficulty / 1.5)) - (95 - percentageOfDifficulty)) + (95 - percentageOfDifficulty));
			window.GameVariables.AnswerCPercent = window.GameVariables.AnswerCIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerBPercent));
			window.GameVariables.AnswerDPercent = window.GameVariables.AnswerDIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerBPercent - window.GameVariables.AnswerCPercent));
			window.GameVariables.AnswerAPercent = window.GameVariables.AnswerAIsOut == true ? 0 : 100 - window.GameVariables.AnswerBPercent - window.GameVariables.AnswerCPercent  - window.GameVariables.AnswerDPercent;
		}
		
		if(window.GameVariables.AnswerCIsOut == false){
			window.GameVariables.AnswerCPercent = Math.ceil(Math.random() * ((100 - (percentageOfDifficulty / 1.5)) - (95 - percentageOfDifficulty)) + (95 - percentageOfDifficulty));
			window.GameVariables.AnswerDPercent = window.GameVariables.AnswerDIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerCPercent));
			window.GameVariables.AnswerAPercent = window.GameVariables.AnswerAIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerCPercent - window.GameVariables.AnswerDPercent));
			window.GameVariables.AnswerBPercent = window.GameVariables.AnswerBIsOut == true ? 0 : 100 - window.GameVariables.AnswerCPercent - window.GameVariables.AnswerDPercent  - window.GameVariables.AnswerAPercent;
		}
		
		if(window.GameVariables.AnswerDIsOut == false){
			window.GameVariables.AnswerDPercent = Math.ceil(Math.random() * ((100 - (percentageOfDifficulty / 1.5)) - (95 - percentageOfDifficulty)) + (95 - percentageOfDifficulty));
			window.GameVariables.AnswerAPercent = window.GameVariables.AnswerAIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerDPercent));
			window.GameVariables.AnswerBPercent = window.GameVariables.AnswerBIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerDPercent - window.GameVariables.AnswerAPercent));
			window.GameVariables.AnswerCPercent = window.GameVariables.AnswerCIsOut == true ? 0 : 100 - window.GameVariables.AnswerDPercent - window.GameVariables.AnswerAPercent  - window.GameVariables.AnswerBPercent;
		}
	}
	
	var sumOfAllPercents = window.GameVariables.AnswerAPercent + window.GameVariables.AnswerBPercent + window.GameVariables.AnswerCPercent + window.GameVariables.AnswerDPercent;
		
	if(sumOfAllPercents < 100){
		if(window.GameVariables.CurrentCorrectAnswer == "a" && window.GameVariables.AnswerAIsOut == false){
			window.GameVariables.AnswerAPercent += 100 - sumOfAllPercents;
		}
		
		if(window.GameVariables.CurrentCorrectAnswer == "b" && window.GameVariables.AnswerBIsOut == false){
			window.GameVariables.AnswerBPercent += 100 - sumOfAllPercents;
		}
		
		if(window.GameVariables.CurrentCorrectAnswer == "c" && window.GameVariables.AnswerCIsOut == false){
			window.GameVariables.AnswerCPercent += 100 - sumOfAllPercents;
		}
		
		if(window.GameVariables.CurrentCorrectAnswer == "d" && window.GameVariables.AnswerDIsOut == false){
			window.GameVariables.AnswerDPercent += 100 - sumOfAllPercents;
		}
	}
}

function revealGraphPercentages(){
	var barAHeight = (328 * (window.GameVariables.AnswerAPercent) / 100) + "px";
	var barBHeight = (328 * (window.GameVariables.AnswerBPercent) / 100) + "px";
	var barCHeight = (328 * (window.GameVariables.AnswerCPercent) / 100) + "px";
	var barDHeight = (328 * (window.GameVariables.AnswerDPercent) / 100) + "px";
	
	$('.ataGraphPercentDiv').transition({'opacity':0}, 0, 'linear');
	
	$('#graphBarA').transition({'height':barAHeight}, 750, function(){
		$('#graphPercentA').html(new Intl.NumberFormat('en', { style: "percent", numberingSystem: window.GameVariables.AtANumberingSystem }).format(window.GameVariables.AnswerAPercent / 100));
		$('#ataPercentStrapA').html(new Intl.NumberFormat('en', { style: "percent", numberingSystem: window.GameVariables.AtANumberingSystem }).format(window.GameVariables.AnswerAPercent / 100));
	});
	
	setTimeout(function(){
		$('#graphBarB').transition({'height':barBHeight}, 750, function(){
			$('#graphPercentB').html(new Intl.NumberFormat('en', { style: "percent", numberingSystem: window.GameVariables.AtANumberingSystem }).format(window.GameVariables.AnswerBPercent / 100));
			$('#ataPercentStrapB').html(new Intl.NumberFormat('en', { style: "percent", numberingSystem: window.GameVariables.AtANumberingSystem }).format(window.GameVariables.AnswerBPercent / 100));
		});
	}, 50);
	
	setTimeout(function(){
		$('#graphBarC').transition({'height':barCHeight}, 750, function(){
			$('#graphPercentC').html(new Intl.NumberFormat('en', { style: "percent", numberingSystem: window.GameVariables.AtANumberingSystem }).format(window.GameVariables.AnswerCPercent / 100));
			$('#ataPercentStrapC').html(new Intl.NumberFormat('en', { style: "percent", numberingSystem: window.GameVariables.AtANumberingSystem }).format(window.GameVariables.AnswerCPercent / 100));
		});
	}, 100);
	
	setTimeout(function(){
		$('#graphBarD').transition({'height':barDHeight}, 750, function(){
			$('#graphPercentD').html(new Intl.NumberFormat('en', { style: "percent", numberingSystem: window.GameVariables.AtANumberingSystem }).format(window.GameVariables.AnswerDPercent / 100));
			$('#ataPercentStrapD').html(new Intl.NumberFormat('en', { style: "percent", numberingSystem: window.GameVariables.AtANumberingSystem }).format(window.GameVariables.AnswerDPercent / 100));
		});
	}, 150);
	
	setTimeout(function(){
		$('.ataGraphPercentDiv').transition({'opacity':1}, 250, 'linear');
	}, 1000);
}

function slideOutATAGraph(){
	$('.ataGraphDiv').transition({perspective:0, opacity: 0}, 250, 'linear', function(){
		$('#graphBarA').css('height', "0px");
		$('#graphBarB').css('height', "0px");
		$('#graphBarC').css('height', "0px");
		$('#graphBarD').css('height', "0px");
		$('#graphPercentA').html("");
		$('#graphPercentB').html("");
		$('#graphPercentC').html("");
		$('#graphPercentD').html("");
		ataLifeLineDisable();
	});
	
	if(window.GameVariables.ShowATAResultsInAnswers == true){
		$('#ataPercentStrapA').parent().transition({perspective:0, opacity:1}, 250, 'linear');
		$('#ataPercentStrapB').parent().transition({perspective:0, opacity:1}, 250, 'linear');
		$('#ataPercentStrapC').parent().transition({perspective:0, opacity:1}, 250, 'linear');
		$('#ataPercentStrapD').parent().transition({perspective:0, opacity:1}, 250, 'linear');
	}
}

/****************************************************************************************************************/
/* Switch the Question Life Line Functions */
/****************************************************************************************************************/

function stqLifeLineSlideIn(){
	$('.ffLifeLine').transition({perspective:0, 'left':'-16px'}, 1250, 'ease-in-out');
	$('.ddLifeLine').transition({perspective:0, 'left':'-16px'}, 1250, 'ease-in-out');
	$('.pafLifeLine').transition({perspective:0, 'left':'146px'}, 1250, 'ease-in-out');
	$('.ataLifeLine').transition({perspective:0, 'left':'309px'}, 1250, 'ease-in-out');
	$('.stqLifeLine').transition({perspective:0, opacity: 1, 'left':'472px'}, 1250, 'ease-in-out');
	$('.lifelineTreeGroupDiv').transition({perspective:0, 'transform':'scale(0.8)'}, 1250, 'ease-in-out');
	
	$('.ffStrapLifeLine').transition({perspective:0, 'left':'445px'}, 500);
	$('.ddStrapLifeLine').transition({perspective:0, 'left':'445px'}, 500);
	$('.pafStrapLifeLine').transition({perspective:0, 'left':'645px'}, 500);
	$('.ataStrapLifeLine').transition({perspective:0, 'left':'845px'}, 500);
	$('.stqStrapLifeLine').transition({perspective:0, 'left':'1045px'}, 500);
}

function stqLifeLineSlideOut(){
	window.GameVariables.LifeLineAnimationCounter = 0;
	$('.ffLifeLine').transition({perspective:0, 'left':'-20px'}, 1250, 'ease-in-out');
	$('.ddLifeLine').transition({perspective:0, 'left':'-20px'}, 1250, 'ease-in-out');
	$('.pafLifeLine').transition({perspective:0, 'left':'155px'}, 1250, 'ease-in-out');
	$('.ataLifeLine').transition({perspective:0, 'left':'330px'}, 1250, 'ease-in-out');
	$('.stqLifeLine').transition({perspective:0, opacity: 0, 'left':'780px'}, 1250, 'ease-in-out');
	$('.lifelineTreeGroupDiv').transition({perspective:0, 'transform':'scale(1)'}, 1250, 'ease-in-out');
	
	$('.ffStrapLifeLine').transition({perspective:0, 'left':'545px'}, 500);
	$('.ddStrapLifeLine').transition({perspective:0, 'left':'545px'}, 500);
	$('.pafStrapLifeLine').transition({perspective:0, 'left':'745px'}, 500);
	$('.ataStrapLifeLine').transition({perspective:0, 'left':'945px'}, 500);
	$('.stqStrapLifeLine').transition({perspective:0, 'left':'1870px'}, 500);
}

function stqPulseLifeLine(){
	$('.stqLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 375, 'ease-out', function(){
		$('.stqLifeLine').transition({perspective:0, scale:[1,1]}, 375, 'ease-in', function(){
			
		});
	});
	
	$('.stqLifeLine .lifelineGradientTreeDiv').transition({perspective:0, opacity: 1}, 0, 'linear', function(){
		setTimeout(function(){
			$('.stqLifeLine .lifelineGradientTreeDiv').transition({perspective:0, opacity: 0}, 100, 'linear');
		}, 650);
		$('.stqLifeLine .lifelineGradientTreeImg').transition({perspective:0, rotate:[-585]}, 750, 'linear', function(){
			$('.stqLifeLine .lifelineGradientTreeImg').transition({perspective:0, rotate:[135]}, 0, 'linear', function(){
				
			});
		});
	});
	
	$('.stqStrapLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 375, 'ease-out', function(){
		$('.stqStrapLifeLine').transition({perspective:0, scale:[1,1]}, 375, 'ease-in', function(){
			
		});
	});
	
	$('.stqStrapLifeLine .lifelineGradientStrapDiv').transition({perspective:0, opacity: 1}, 0, 'linear', function(){
		setTimeout(function(){
			$('.stqStrapLifeLine .lifelineGradientStrapDiv').transition({perspective:0, opacity: 0}, 100, 'linear');
		}, 650);
		$('.stqStrapLifeLine .lifelineGradientStrapImg').transition({perspective:0, rotate:[-585]}, 750, 'linear', function(){
			$('.stqStrapLifeLine .lifelineGradientStrapImg').transition({perspective:0, rotate:[135]}, 0, 'linear', function(){
				
			});
		});
	});
}

function stqLifeLineDisable(){
	if(window.GameVariables.LifelineUsedRed == true){
		$('.stqLifeLine .lifelineFillRedTreeImg').css('opacity', 1);
		$('.stqStrapLifeLine .lifelineFillRedStrapImg').css('opacity', 1);
	}
	else{
		$('.stqLifeLine .lifelineUsedImg').css('opacity', 1);
		$('.stqLifeLine .lifelineTreeImg').css('opacity', 1);
		$('.stqStrapLifeLine .lifelineUsedStrapImg').css('opacity', 1);
		$('.stqStrapLifeLine .lifelineStrapImg').css('opacity', 1);
	}
}

function switchOutToNewQuestion(){
	clearTimeout(window.GameVariables.ShowAnswerTimeout);
	resetAnswerStraps();
	stqLifeLineDisable();
	setQuestion(true);
	$('.questionStrapDiv').transition({perspective:0, 'bottom':'240px', scale:[1,1]}, 350, 'ease-out', function(){
		setTimeout(function(){
			$('.answerGroupADiv').transition({perspective:0, 'bottom':'0px', scale:[1,1]}, 350, 'ease-out');
		}, 0);
		setTimeout(function(){
			$('.answerGroupBDiv').transition({perspective:0, 'bottom':'0px', scale:[1,1]}, 350, 'ease-out');
		}, 150);
	});
}

function switchAnimation(){
	$('.answerGroupBDiv').transition({perspective:0, 'bottom':'-375px', scale:[3,3]}, 350, 'ease-in');
	setTimeout(function(){
		$('.answerGroupADiv').transition({perspective:0, 'bottom':'-375px', scale:[3,3]}, 350, 'ease-in');
	}, 250);
	setTimeout(function(){
		$('.questionStrapDiv').transition({perspective:0, 'bottom':'-320px', scale:[3,3]}, 350, 'ease-in');
	}, 650);
}

/****************************************************************************************************************/
/* Double Dip Life Line Functions */
/****************************************************************************************************************/

function ddPulseLifeLine(){
	$('.ddLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 375, 'ease-out', function(){
		$('.ddLifeLine').transition({perspective:0, scale:[1,1]}, 375, 'ease-in', function(){
			
		});
	});
	
	$('.ddLifeLine .lifelineGradientTreeDiv').transition({perspective:0, opacity: 1}, 0, 'linear', function(){
		setTimeout(function(){
			$('.ddLifeLine .lifelineGradientTreeDiv').transition({perspective:0, opacity: 0}, 100, 'linear');
		}, 650);
		$('.ddLifeLine .lifelineGradientTreeImg').transition({perspective:0, rotate:[-585]}, 750, 'linear', function(){
			$('.ddLifeLine .lifelineGradientTreeImg').transition({perspective:0, rotate:[135]}, 0, 'linear', function(){
				
			});
		});
	});
	
	$('.ddStrapLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 375, 'ease-out', function(){
		$('.ddStrapLifeLine').transition({perspective:0, scale:[1,1]}, 375, 'ease-in', function(){
			
		});
	});
	
	$('.ddStrapLifeLine .lifelineGradientStrapDiv').transition({perspective:0, opacity: 1}, 0, 'linear', function(){
		setTimeout(function(){
			$('.ddStrapLifeLine .lifelineGradientStrapDiv').transition({perspective:0, opacity: 0}, 100, 'linear');
		}, 650);
		$('.ddStrapLifeLine .lifelineGradientStrapImg').transition({perspective:0, rotate:[-585]}, 750, 'linear', function(){
			$('.ddStrapLifeLine .lifelineGradientStrapImg').transition({perspective:0, rotate:[135]}, 0, 'linear', function(){
				
			});
		});
	});
}

function playDDFinalAnswerSound(){
	if(window.GameVariables.ddLifeLineSequenceCounter == 1){
		startLongActiveSound("dd_first_final.mp3");
		setTimeout(stopLifelineActiveSound, 200);
	}
	else if(window.GameVariables.ddLifeLineSequenceCounter == 2){
		startLongActiveSound("dd_second_final.mp3");
		setTimeout(stopLifelineActiveSound, 200);
	}
}

function ddLifeLineDisable(){
	if(window.GameVariables.LifelineUsedRed == true){
		$('.ddLifeLine .lifelineFillRedTreeImg').css('opacity', 1);
		$('.ddStrapLifeLine .lifelineFillRedStrapImg').css('opacity', 1);
	}
	else{
		$('.ddLifeLine .lifelineUsedImg').css('opacity', 1);
		$('.ddLifeLine .lifelineTreeImg').css('opacity', 1);
		$('.ddStrapLifeLine .lifelineUsedStrapImg').css('opacity', 1);
		$('.ddStrapLifeLine .lifelineStrapImg').css('opacity', 1);
	}
}

function CorrectAnswerDoubleDip(){
	showFinalToCorrectAnswerStep1(window.GameVariables.CurrentTargetAnswer.toUpperCase());
	playCorrectAnswerSound();
	hideLifeLineCentered();
	setTimeout(stopLifelineActiveSound, 200);
	setTimeout(stopLongActiveSound, 200);
	
	if(window.GameVariables.IsLevelStrapShowing == true){
		hideLevelStrap();
		window.GameVariables.IsLevelStrapShowing = false;
	}

	window.GameVariables.QuestionSequenceCounter = 7;
}

function WrongAnswerDoubleDip(){
	undoFinaledAnswer();
	window.GameVariables.QuestionSequenceCounter = -1;
}

function WrongAnswerDoubleDip2(){
	revealNormalToCorrectAnswerStep1(window.GameVariables.CurrentCorrectAnswer.toUpperCase());
	playWrongAnswerSound();
	hideLifeLineCentered();
	setTimeout(stopLifelineActiveSound, 200);
	setTimeout(stopLongActiveSound, 200);
	window.GameVariables.QuestionSequenceCounter++;
}

/****************************************************************************************************************/
/* Other Life Line Functions */
/****************************************************************************************************************/

function showLifeLineCentered(target){
	window.GameVariables.ShowLifeLineCenteredAnimation = true;
	
	$(target).css('opacity', 1);
		
	$('.answerStrapLifeLineCenterContainerDiv').transition({perspective:0, scale:[1,1], opacity:1}, 375, 'ease-out', function(){
		$('.answerStrapLifeLineCenterContainerDiv').transition({perspective:0, scale:[0.8,0.8], opacity:1}, 375, 'ease-in-out');
	});
	
	$('.answerStrapLifeLineCenterGradientDiv').transition({perspective:0, opacity: 1}, 0, 'linear', function(){
		setTimeout(function(){
			$('.answerStrapLifeLineCenterGradientDiv').transition({perspective:0, opacity: 0}, 100, 'linear');
		}, 650);
		$('.lifelineGradientCenterImg').transition({perspective:0, rotate:[-720]}, 750, 'linear', function(){
			$('.lifelineGradientCenterImg').transition({perspective:0, rotate:[0]}, 0, 'linear', function(){
				
			});
		});
	});
}

function hideLifeLineCentered(){
	window.GameVariables.ContinuePulsingLifeLineCenter = false;
	window.GameVariables.ShowLifeLineCenteredAnimation = false;
	$('.answerStrapLifeLineCenterContainerDiv').transition({perspective:0, scale:[0.1,0.1], opacity:0}, 600, 'ease-in', function(){
		$('#stqLifeLineCenterImg').css('opacity', 0);
		$('#ddLifeLineCenterImg').css('opacity', 0);
	});
}

function hideJustLifeLineCenteredContainer(){
	$('.answerStrapLifeLineCenterDiv').css('opacity', 0);
}

function showJustLifeLineCenteredContainer(){
	$('.answerStrapLifeLineCenterDiv').css('opacity', 1);
}

function slideLifeLineStrapIn(){
	$('.lifeLinesLeftStrapDiv').transition({perspective:0, 'left':'112px'}, 600, 'ease-out');
}

function slideLifeLineStrapOut(){
	$('.lifeLinesLeftStrapDiv').transition({perspective:0, 'left':'-1696px'}, 600, 'ease-in', function(){
		$('.lifeLinesLeftStrapDiv').transition({perspective:0, 'left':'1920px'}, 1, 'linear');
	});
}