function resizeFiller() {
	var main = document.getElementsByClassName('mainDiv').offsetHeight;
	var bodySize = document.getAttribute('body').style.height;
	var finSize = 1080 - bodySize;
	if (bodySize < 1080px) {
		document.getElementsByClassName('mainDiv').style.height = finSize + "px";
	}
}
window.onload = resizeFiller;


function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
	var dropdowns = document.getElementsByClassName("dropdown-content");
	var i;
	for (i = 0; i<dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('show')) {
			openDropdown.classList.remove('show');
		}
	}
	}
}


