function resizeFiller() {
	var main = document.getElementsByClassName('mainDiv').offsetHeight;
	var bodySize = document.getAttribute('body').style.height;
	var finSize = 1080 - bodySize;
	if (bodySize < 1080px) {
		document.getElementsByClassName('mainDiv').style.height = finSize + "px";
	}
}
window.onload = resizeFiller;


function 50kwFunc() {
	var x50 = document.getElementById('Tab50').style.display = "block";
	var x150 = document.getElementById('Tab150').style.display = "none";
	var x250 = document.getElementById('Tab250').style.display = "none";
}
			
function 150kwFunc() {
	var x50 = document.getElementById('Tab50').style.display = "none";
	var x150 = document.getElementById('Tab150').style.display = "block";
	var x250 = document.getElementById('Tab250').style.display = "none";
}
			
function 250kwFunc() {
	document.getElementById('Tab50').style.display = "none";
	document.getElementById('Tab150').style.display = "none";
	document.getElementById('Tab250').style.display = "block";
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


