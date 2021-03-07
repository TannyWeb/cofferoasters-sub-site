
export const toggleMenu = () => {
	const menuToggle = document.querySelector('.mob-header .toggle');
	const parent = document.querySelector('.mob-header ');
	const overlay = document.querySelector('.mob-header ul');
	menuToggle.addEventListener('click', () => {
		if (overlay.classList.contains('hide')) {
			overlay.classList.remove('hide');
			overlay.classList.add('show');
			parent.classList.add('show-toggle')
			menuToggle.src = '../../src/assets/shared/mobile/icon-close.svg'
		} else {
			overlay.classList.remove('show');
			overlay.classList.add('hide');
			parent.classList.remove('show-toggle')
				menuToggle.src = '../../src/assets/shared/mobile/icon-hamburger.svg'
		}
	});
};
