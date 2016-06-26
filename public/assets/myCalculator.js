var calcDisplay = $("#display").val();


$("#0").click(function(){
	calcDisplay += "0";
	$("#display").val(calcDisplay);
});

$("#1").click(function(){
	calcDisplay += "1";
	$("#display").val(calcDisplay);
});

$("#2").click(function(){
	calcDisplay += "2";
	$("#display").val(calcDisplay);
});

$("#r").click(function(){
	calcDisplay += "+";
	$("#display").val(calcDisplay);
});

$("#3").click(function(){
	calcDisplay += "3";
	$("#display").val(calcDisplay);
});

$("#4").click(function(){
	calcDisplay += "4";
	$("#display").val(calcDisplay);
});

$("#5").click(function(){
	calcDisplay += "5";
	$("#display").val(calcDisplay);
});

$("#-").click(function(){
	calcDisplay += "-";
	$("#display").val(calcDisplay);
});

$("#6").click(function(){
	calcDisplay += "6";
	$("#display").val(calcDisplay);
});

$("#7").click(function(){
	calcDisplay += "7";
	$("#display").val(calcDisplay);
});

$("#8").click(function(){
	calcDisplay += "8";
	$("#display").val(calcDisplay);
});



$("#q").click(function(){
	calcDisplay += "*";
	$("#display").val(calcDisplay);
});

$("#9").click(function(){
	calcDisplay += "9";
	$("#display").val(calcDisplay);
});

$("#c").click(function(){
	calcDisplay = "";
	$("#display").val(calcDisplay);
});

$("#w").click(function(){
	var answer = eval(calcDisplay);
	calcDisplay = answer;
	$("#display").val(answer);
});

$("#e").click(function(){
	calcDisplay += "/";
	$("#display").val(calcDisplay);
});




