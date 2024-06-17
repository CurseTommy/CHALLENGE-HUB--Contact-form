'use strict';

const inputRadio = document.querySelectorAll('input[type=radio]');
const divRadio = document.querySelectorAll('.radio');

document.addEventListener('change', () => {
	if (inputRadio[0].checked) {
		divRadio[0].classList.add('green-200-bgc');
	} else {
		divRadio[0].classList.remove('green-200-bgc');
	}
	if (inputRadio[1].checked) {
		divRadio[1].classList.add('green-200-bgc');
	} else {
		divRadio[1].classList.remove('green-200-bgc');
	}
});

const submitButton = document.querySelector('#submit');
const messageBox = document.querySelector('.message_sent');

submitButton.addEventListener('click', () => {
	messageBox.classList.add('active');
	setTimeout(() => {
		messageBox.classList.remove('active');
	}, 2000);
});
