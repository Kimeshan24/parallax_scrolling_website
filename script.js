let text = document.getElementById('text');
let text2 = document.getElementById('text2');
let text3 = document.getElementById('text3');
let text4 = document.getElementById('text4');
let about = document.getElementById('about');
let services = document.getElementById('services');
let contact = document.getElementById('contact');

window.addEventListener('scroll', () => {
	let value = window.scrollY;
	
	text.style.marginTop = value * 1.5 + 'px';
});

window.addEventListener('scroll', () => {
	let value = window.scrollY;
	
	text2.style.marginLeft = value / -1.5 + 'px';
});

window.addEventListener('scroll', () => {
	let value = window.scrollY;

	text3.style.marginTop = value / -1.5 + 'px';
});

window.addEventListener('scroll', () => {
	let value = window.scrollY;

	text4.style.marginLeft = value / 1.5 + 'px';
});

window.addEventListener('scroll', () => {
	let value = window.scrollY;

	about.style.marginLeft = value * 0 + 'px';
});

window.addEventListener('scroll', () => {
	let value = window.scrollY;

	services.style.marginLeft = value * 0 + 'px';
});

window.addEventListener('scroll', () => {
	let value = window.scrollY;

	contact.style.marginLeft = value * 0 + 'px';
});