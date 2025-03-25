const sections = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('header nav a');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const form = document.querySelector('form');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const phoneNumber = document.querySelector('.phoneNumber');
const message = document.querySelector('.message');
const msg = document.querySelector('.msg');
const msgText = document.querySelector('.msg__text');
const msgx = document.querySelector('.msg__x');
const servicesOrder = document.querySelector('.services__order');
const helpEl = document.querySelector('.help-ai');

// menu part
menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

// Navbar links settings
window.onscroll = () => {
	sections.forEach((sec) => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if (top >= offset && top < offset + height) {
			navlinks.forEach((links) => {
				links.classList.remove('active');
				document
					.querySelector('header nav a[href*=' + id + ']')
					.classList.add('active');
			});
		}
	});

	let header = document.querySelector('header');

	header.classList.toggle('sticky', window.scrollY > 100);

	menuIcon.classList.remove('bx-x');
	navbar.classList.remove('active');
};

// Scroll Reveal
ScrollReveal({
	distance: '100px',
	duration: 1000,
	delay: 100,
});

ScrollReveal().reveal(
	'.home__content, .heading, .portf__list, .about__content, .services__list, form',
	{
		origin: 'top',
	}
);
ScrollReveal().reveal('.home__img, .about__img', {
	origin: 'bottom',
});
ScrollReveal().reveal('.about__img', {
	origin: 'left',
});

ScrollReveal({ reset: true });

// Typed.js
const typed = new Typed('.multiple-text', {
	strings: ['Frontend Developer!', 'Software engineer!', 'Web Developer!'],
	typeSpeed: 35,
	backSpeed: 35,
	backDelay: 1500,
	loop: true,
});

// Alan AI
var alanBtnInstance = alanBtn({
	key: '0acd84aad4553c575628588a9f4158442e956eca572e1d8b807a3e2338fdd0dc/stage',
	onCommand: function (commandData) {
		if (commandData.command === 'changePart') {
			const data = commandData.data;

			switch (data) {
				// pages
				case 'home':
					window.location.href = '#home';
					break;
				case 'about':
					window.location.href = '#about';
					break;
				case 'services':
					window.location.href = '#services';
					break;
				case 'projects':
					window.location.href = '#portfolios';
					break;
				case 'resume':
					window.location.href = '../My Resume.pdf';
					break;
				// projects
				case '1':
					window.location.href = 'https://cosmos-spaces-app.netlify.app/';
					break;
				case '2':
					window.location.href = 'https://feather-web-site.netlify.app/';
					break;
				case '3':
					window.location.href = 'https://harvest-app.netlify.app/';
					break;
				case '4':
					window.location.href = 'https://roll-game-ms.netlify.app/';
					break;
				case '5':
					window.location.href = 'https://qrcode-generator-ms.netlify.app/';
					break;
				case '6':
					window.location.href = 'https://advice-generatorrr.netlify.app/';
			}

			// social media
			switch (data) {
				case 'telegram':
					window.location.href = 'https://t.me/m_xasanov_blog';
					break;
				case 'instagram':
					window.location.href = 'https://www.instagram.com/m_xasanov_01/';
					break;
				case 'facebook':
					window.location.href = 'https://www.facebook.com/m.xasanov.01';
					break;
				case 'twitter':
					window.location.href = 'https://twitter.com/m_xasanov_01';
					break;
				case 'linkedin':
					window.location.href =
						'https://www.linkedin.com/in/m-xasanov-138291258/';
			}
		}

		if (commandData.command === 'help') {
			helpEl.style.display = 'block';

			setTimeout(() => {
				helpEl.style.display = 'none';
			}, 20000);
		}

		switch (commandData.command) {
			case 'fn':
				firstName.value = commandData.data;
				break;
			case 'ln':
				lastName.value = commandData.data;
				break;
			case 'pn':
				phoneNumber.value = commandData.data;
				break;
			case 'em':
				email.value = commandData.data;
				break;
			case 'ms':
				message.value = commandData.data;
				break;
		}
	},
	rootEl: document.getElementById('alan-btn'),
});
