document.addEventListener('DOMContentLoaded', () => {
	const seeMoreAutos = document.querySelector('.hero__more')
	const cardBtn = document.querySelectorAll('.auto__btn')
	const btnAction = document.querySelector('.book__btn')
	const rollsAuto = document.querySelector('.book__car');
	const telInput = document.querySelector("input[type='tel']");
	const nameInput = document.getElementById('name')
	const autoInput = document.getElementById('auto')
	const linkToHero = document.getElementById('to-hero')
	const linkToCars = document.getElementById('to-cars')
	const linkToBook = document.getElementById('to-book')
	const heroSec = document.getElementById('hero')
	const carsSec = document.getElementById('cars')
	const bookSec = document.getElementById('book')
	let num = 0
	function smoothScroll(btn, elem) {
		if (btn.length) {
			for (let i = 0; i < btn.length; i++) {
				btn[i].addEventListener('click', () => {
					elem.scrollIntoView({ behavior: 'smooth' })
				})
			}
		} else {
			btn.addEventListener('click', () => {
				elem.scrollIntoView({ behavior: 'smooth' })
			})
		}
	}
	smoothScroll(seeMoreAutos, carsSec)
	smoothScroll(cardBtn, bookSec)
	smoothScroll(linkToHero, heroSec)
	smoothScroll(linkToCars, carsSec)
	smoothScroll(linkToBook, bookSec)
	const inputMask = new Inputmask('+7 (999) 999-99-99')
	inputMask.mask(telInput)
	new window.JustValidate('.book__form', {
		rules: {
			name: {
				required: true,
				minLength: 2,
				maxLength: 25,
			},
			tel: {
				required: true,
				function: () => {
					const phone = telInput.inputmask.unmaskedvalue();
					return Number(phone) && phone.length === 10;
				},
			},
			auto: {
				required: true,
				minLength: 2,
				maxLength: 30,
			},
		},
		colorWrong: 'red',
		messages: {
			name: {
				required: 'Введите имя',
				minLength: 'Введите 2 и более символов',
				maxLength: 'Запрещено вводить более 25 символов',
			},
			auto: {
				required: 'Введите название автомобиля',
				email: 'Введите корректное название автомобиля'
			},
			tel: {
				required: 'Введите телефон',
				function: 'Введите корректный телефон'
			}
		}
	})

	btnAction.addEventListener('click', () => {
		if (nameInput.value === '') {
			num++
		} else if (telInput.value === '') {
			num++
		} else if (autoInput.value === '') {
			num++
		} else {
			alert('Спасибо за заявку! Наш менеджер скроро с вами свяжется.')
		}
	})

	document.addEventListener('scroll', () => {
		heroSec.style.backgroundPositionX = '0' + (0.3 * window.pageYOffset) + 'px';
	})
	rollsAuto.addEventListener('mousemove', (event) => {
		rollsAuto.style.transform = 'translate3d(' + ((event.clientX * 0.4) / 8) + 'px,' + ((event.clientY * 0.4) / 8) + 'px,0px)';
	});
})