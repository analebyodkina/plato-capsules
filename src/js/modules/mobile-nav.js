function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');
	const headerLink = document.querySelector('.header__li');

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');		
	};

	headerLink.onclick = function () {
		nav.classList.remove('mobile-nav--open');	
		menuIcon.classList.remove('nav-icon--active');	
		document.body.classList.remove('no-scroll');
		
	};
}

export default mobileNav;