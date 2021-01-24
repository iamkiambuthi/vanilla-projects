/* styles.css @iamkiambuthi 2021. */
// sleepy; will try and implement logic tommorow morning.

// APPROACHES
// ===========
// 1. Translate the entire carousel left or right in the X axis.
// 2. Focus on one singular item and shift focus to the left or right depending on direction.

window.onload = function() {
	// the buttons.
	const leftBtn = document.querySelector('.carousel-btn.left');
	const rightBtn = document.querySelector('.carousel-btn.right');
	const devOutput = document.querySelector('.dev-output');

	// the carousel.
	const carousel = document.querySelector('.carousel');
	// the items in the carousel.
	const carouselItems = document.querySelectorAll('.carousel-item');
	itemsLength = carouselItems.length;

	function assignInitialClasses() {
		// sets initial classes.

		carouselItems[itemsLength - 1].classList.add("prev-item");
		carouselItems[0].classList.add('active-item');
		carouselItems[1].classList.add('next-item');
	}

	function setEventListeners() {
		// set event listeners for both buttons.

		leftBtn.addEventListener('click', moveToNext);
		rightBtn.addEventListener('click', moveToPrevious);
	}

	function moveToNext() {
		// moves focus to next item in the carousel.

		devOutput.innerHTML = 'move focus to next item.';
	}
	
	function moveToPrevious() {
		// moves focus to previous item in the carousel.
		
		devOutput.innerHTML = 'move focus to previous item.';
	}

	function initCarousel() {
		// call the functions.
		assignInitialClasses();
		setEventListeners();
	}

	initCarousel();

}