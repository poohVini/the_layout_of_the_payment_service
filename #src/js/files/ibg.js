function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector("img")) {
			ibg[i].style.backgroundimage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	};
}
ibg();