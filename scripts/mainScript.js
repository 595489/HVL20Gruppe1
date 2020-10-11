function resizeFiller() {
	var main = document.getElementsByClassName('mainDiv').offsetHeight;
	var bodySize = document.getAttribute('body').style.height;
	var finSize = 1080 - bodySize;
	if (bodySize < 1080px) {
		document.getElementsByClassName('mainDiv').style.height = finSize + "px";
	}
}
window.onload = resizeFiller;