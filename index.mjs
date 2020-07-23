import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';

const firstSlider = {
	a11y: true,
	autoplay: {
		delay: 5000,
	},
	// freeMode: true,
	lazy: true,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	scrollbar: {
		el: '.swiper-scrollbar',
	},
	breakpoints: {
		1025: {
			slidesPerView: 2,
			spaceBetween: 10
		},
		1300: {
			slidesPerView: 3,
			spaceBetween: 20
		},
	}
};

const secondSlider = {
	autoplay: true,
	cubeEffect: {
		shadowOffset: 200,
		shadowScale: 1.1,
	},
	effect: 'cube',
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
};

const thirdSlider = {
	parallax: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
};

const fourthSlider = {
	autoplay: true,
	centeredSlides: true,
	coverflowEffect: {
		rotate: 50,
		depth: 250,
	},
	effect: 'coverflow',
	loopedSlides: 1,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	slidesPerView: 'auto',
};

new Swiper('.swiper-container-first', firstSlider);
new Swiper('.swiper-container-second', secondSlider);
new Swiper('.swiper-container-third', thirdSlider);
new Swiper('.swiper-container-fourth', fourthSlider);