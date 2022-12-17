let countDownDate = new Date("6-10-23").getTime();


// Take milseconds and Return {Sec , Min , H , Days}
function timeDifference(milseconds) { 
	let s = 1000 
	let m = (s * 60 )
	let h = (m * 60 )
	let d = (h * 24)


	let fulday = milseconds  / d
	let days = Math.floor(fulday)

	let fulhours = (milseconds % d) / h 
	let hours = Math.floor(fulhours)

	let fulmintues = (milseconds % h  ) / m 
	let mintues = Math.floor(fulmintues)

	let fulseconds = (milseconds % m ) / s
 	let seconds = Math.floor(fulseconds)

	return {"seconds":seconds , "mintues":mintues, "hours":hours,"days":days }

}


let counter = setInterval(() => {
	
	let now = new Date().getTime(); 

	let difference = countDownDate - now 

	let timeDifferenceObject = timeDifference(difference)


	document.getElementById("days").innerHTML = timeDifferenceObject.days
	document.getElementById("hours").innerHTML = timeDifferenceObject.hours
	document.getElementById("minutes").innerHTML = timeDifferenceObject.mintues
	document.getElementById("seconds").innerHTML = timeDifferenceObject.seconds


} , 1000)