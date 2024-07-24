// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

import textsData from '../../constants/tests.json';

function showPortfolio() {
	const wrapper = document.querySelector('.portfolio');
	const button = wrapper.querySelector('.portfolio__button');

	button.addEventListener('click', () => {
		if (wrapper.classList.contains('_show-all-works')) {
			wrapper.classList.remove('_show-all-works');
			button.textContent = 'show more';
		} else {
			wrapper.classList.add('_show-all-works');
			button.textContent = 'hide';
		}
	});
}

function initToggleLanguage() {
	let currentLanguage = 'uk';

	const wrapper = document.querySelector('.language-selector');
	const button = wrapper.querySelector('.toggle-language-selector');

	// Text blocks
	const mainTextCont = document.querySelector('.offer__text');
	const aboutListCont = document.querySelector('.content-block__text');
	const skillsListCont = document.querySelector('.content-block__text');

	function changeLanguage(language) {
		const texts = JSON.parse(JSON.stringify(textsData[language]));

		mainTextCont.textContent = texts.main_block_text;

		aboutListCont.innerHTML = texts.about_list.reduce((acc, current) => (acc += `<p>${current}s</p>`), '');

		skillsListCont.innerHTML = texts.hard_skills_list.reduce((acc, current) => (acc += `<p>${current}s</p>`), '');
	}

	button.addEventListener('click', () => {
		wrapper.classList.toggle('_active');

		currentLanguage = currentLanguage === 'uk' ? 'en' : 'uk';

		changeLanguage(currentLanguage);
	});
}

function DOMLoad() {
	if (document.querySelector('.portfolio')) {
		showPortfolio();
	}
	if (document.querySelector('.language-selector')) {
		initToggleLanguage();
	}
}

document.addEventListener('DOMContentLoaded', DOMLoad);
