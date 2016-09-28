function time(){
	var today = new Date()
	var hour = today.getHours()
	var mins = today.getMinutes()
	var secs = today.getSeconds()
	var amPm = ""



	if (hour == 0) {
		hour = 12
	}

	if(hour > 11){
		var amPm = "PM"
		hour = hour - 12
	}else {
		var amPm = "AM"
	}

	if(hour < 10){
		hour = "0" + hour
	}

	if(mins < 10){
		mins = "0" + mins
	}

	if(secs < 10){
		secs = "0" + secs
	}

	

	// var totalTime = hour + ":" + mins + ":" + secs + amPm
	var hourDiv = document.getElementById("hourHere")
	var minsDiv = document.getElementById("minsHere")
	var secsDiv = document.getElementById("secsHere")
	var amPmDiv = document.getElementById("amPmHere")
	var dud1Div = document.getElementById("dud1Here")
	var dud2Div = document.getElementById("dud2Here")
	var dud3Div = document.getElementById("dud3Here")
	var dud4Div = document.getElementById("dud4Here")
	var dud5Div = document.getElementById("dud5Here")
	var dud6Div = document.getElementById("dud6Here")
	var dud7Div = document.getElementById("dud7Here")
	var dud8Div = document.getElementById("dud8Here")

	dud1Div. textContent = secs
	hourDiv.textContent = hour
	dud2Here.textContent = mins

	dud3Div.textContent = hour
	minsDiv.textContent = mins
	dud4Div.textContent = secs

	dud5Div.textContent = mins
	secsDiv.textContent = secs
	dud6Div.textContent = hour

	dud7Div.textContent = secs
	amPmDiv.textContent = amPm
	dud8Div.textContent = mins

	dud1Div.className = "timeDiv dudFont"
	hourDiv.className = "timeDiv whiteFont"
	dud2Div.className = "timeDiv dudFont"

	dud3Div.className = "timeDiv dudFont"
	minsDiv.className = "timeDiv whiteFont"
	dud4Div.className = "timeDiv dudFont"

	dud5Div.className = "timeDiv dudFont"
	secsDiv.className = "timeDiv whiteFont"
	dud6Div.className = "timeDiv dudFont"

	dud7Div.className = "timeDiv dudFont"
	amPmDiv.className = "timeDiv whiteFont"
	dud8Div.className = "timeDiv dudFont"

	setTimeout("time()", 1000)

}

