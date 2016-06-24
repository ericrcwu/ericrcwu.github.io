var q1 = 0;
$( document ).ready(function() {// don't delete!
	$("#goDown1").hide();
	$("#chest").hide();
	$("#sc").hide();
	$("#goLeft2").hide();
	$("#cannon").hide();


$("#b1").click(function(){
	$("#b1").hide();
	$("#instructions").hide();
});

$("#goTop1").click(function(){
	$("body").css("backgroundImage", "url(img/gh.jpg)")
	$("#goTop1").hide();
	$("#goLeft1").hide();
	$("#goRight1").hide();
	$("#goDown1").show();
	$("#sc").show();
});
$("#sc").click(function(){
	q1 = q1 + 1;
	$("#sc").hide();
	$("#chest").show();
	$("#chest").html("Chests Found:" + q1); 
});
$("#goDown1").click(function(){
	$("#goDown1").hide();
	$("body").css("backgroundImage", "url(http://cheshirestumpremoval.co.uk/images/hedge.jpg")
	$("#chest").hide();
	$("#goTop1").show();
	$("#goLeft1").show();
	$("#goRight1").show();
});
$("#goRight1").click(function(){
	$("body").css("backgroundImage", "url(http://img08.deviantart.net/06da/i/2009/256/b/b/hedge_maze_stock_by_chiron178.jpg")
	$("goTop1").hide();
	$("goDown1").hide();
	$("#goLeft1").hide();
	$("#goRight1").hide();
	$("#cannon").show(3000);
});
});//don't delete!!


