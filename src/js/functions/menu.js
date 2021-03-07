
export const toggleMenu = () => {
	const menuToggle = document.querySelector('.mob-header .open');
	const overlay = document.querySelector('.mob-header_nav');
	menuToggle.addEventListener('click', () => {
		if (overlay.classList.contains('hide')) {
			overlay.classList.remove('hide');
			overlay.classList.add('show');
		} else {
			overlay.classList.remove('show');
			overlay.classList.add('hide');
		}
	});
};

export const toggleMenuClose = () => {
		const menuToggle = document.querySelector('.mob-header_nav .close');
	const overlay = document.querySelector('.mob-header_nav');
	menuToggle.addEventListener('click', () => {
		if (overlay.classList.contains('hide')) {
			overlay.classList.remove('hide');
			overlay.classList.add('show');
		} else {
			overlay.classList.remove('show');
			overlay.classList.add('hide');
		}
	});
}