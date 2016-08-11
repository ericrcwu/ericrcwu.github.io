$("#rrules").hide();
function start() {
	var q1 = prompt("Are you sure?").toLowerCase();
	if (q1 === "yes") {
		var q2 = prompt("Did you read the rules?").toLowerCase();
		if (q2 === "yes") {

		}
	}
	else if (q1 === "no") {

	}
	else {
		alert("Please say yes or no next time, I don't speak gibberish.");
	}
}
function rules() {
	$("#intro").hide();
	$("#rrules").show();
}