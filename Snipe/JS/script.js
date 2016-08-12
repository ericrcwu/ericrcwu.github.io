

$(document).ready(function() {
	var money = 0;

	$('#rrules').hide();
	$("#game").hide();
	$("#shop").hide();
	$("#finish_wave_1").hide();

$("#start").click(function() {
	var q1 = prompt("Are you sure?").toLowerCase();
	if (q1 === "yes") {
		$("#intro").hide();
		$("body").css({"-webkit-animation-play-state": "paused",
		'background-image':'url(http://www.colorhexa.com/595959.png)'});
		$("#game").show();
		
		$(".zombie").animate({marginTop: "+=800px"}, 25000);
		
	}
	 
	else if (q1 === "no") {
		alert("Ok");
	}

	else {
		alert("Please say yes or no next time, I don't speak gibberish.");
	}

});

$("#rules").click(function() {
	$("#intro").hide();
	$("#rrules").show();
});

$("#back").click(function() {
	$("#intro").show();
	$("#rrules").hide();	
});

//What happens when you click zombie1
$('.zombie').click(function(){
   $(this).hide("explode");
   money += 5;
   document.getElementById("moneyearned").innerHTML = money;
   waveComplete();
});


//Function to check money earned 
function waveComplete() {
	if (money === 120) {
		$("#finish_wave_1").show();
		$("#gun").hide();
		$("body").css({"background-image" : "url(http://www.beautycolorcode.com/653301-2880x1800.png)"});
		$("#shop").show();
	}

}

});