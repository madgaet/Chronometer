var status; // 1 is STARTED and 2 is STOPPED
var time;

function start() {
	if (status == 2) {
		time = 0;
		status = 1;
	}
}

function stop() {
	if (status == 1) {
		status = 2;
	}
}

function resume() {
	if (status == 2) {
		status = 1;
	}
}

function timer() {
	if (status == 1) {
		time++;
		var text = document.getElementById("time");
		text.innerHTML = "" + time;
	}
}

window.onload = function () {
	document.getElementById("start").onclick = start;
	document.getElementById("stop").onclick = stop;
	document.getElementById("resume").onclick = resume;
	status = 2;
	time = 0;
	setInterval(timer, 1000);
};