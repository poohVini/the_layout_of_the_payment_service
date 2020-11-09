let menuParents = document.querySelectorAll('.menu-page__parent');
for (let index = 0; index < menuParents.length; index++) {
	const menuParent = menuParents[index];
	menuParent.addEventListener("mouseenter", function (e) {
		menuParent.classList.add('_active');
	});
	menuParent.addEventListener("mouseleave", function (e) {
		menuParent.classList.remove('_active');
	});
}

let menuPageBureger = document.querySelector('.menu-page__burger');
let menuPageBody = document.querySelector('.menu-page__body');
menuPageBureger.addEventListener("clock", function (e) {
	menuPageBureger.classList.toggle('_active');
	_slideToggle(menuPageBody);
});
