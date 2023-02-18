function updateTime() {
	let now = new Date();
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();
	let ampm = (hours < 12) ? 'AM' : 'PM';
	hours = (hours % 12 == 0) ? 12 : hours % 12;
	hours = (hours < 10) ? '0' + hours : hours;
	minutes = (minutes < 10) ? '0' + minutes : minutes;
	seconds = (seconds < 10) ? '0' + seconds : seconds;
	let timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
	document.getElementById('time').innerHTML = timeString;
	setTimeout(updateTime, 1000);
}

window.onload = function() {
	updateTime();
}

