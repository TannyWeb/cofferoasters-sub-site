export const toggleAccordion = () => {
	const arrows = [...document.querySelectorAll('.accordion__text img')];

	for (const arrow of arrows) {
		arrow.addEventListener('click', (e) => {
			const target = e.target;
			const parent = target.parentElement;
			// const sibling = parent.nextElementSibling;
			const mainParent = parent.parentElement;

			if (mainParent.classList.contains('show-accord')) {
				mainParent.classList.remove('show-accord');
				mainParent.classList.add('hide-accord');
			} else {
				mainParent.classList.remove('hide-accord');
				mainParent.classList.add('show-accord');
			}
			target.classList.toggle('flip');

			console.log(mainParent.getAttribute('accord'));

			// loop through sidebar and remove active class on click

			const sidebarItem = document.querySelectorAll(
				'.accordion__sidebar_item'
			);

			for (const sidebar of [...sidebarItem]) {
				if (sidebar.classList.contains('active')) {
					sidebar.classList.remove('active');
				}
			}

			sidebarItem[
				mainParent.getAttribute('accord') - 1
			].classList.contains('active')
				? sidebarItem[
						mainParent.getAttribute('accord') - 1
				  ].classList.remove('active')
				: sidebarItem[
						mainParent.getAttribute('accord') - 1
				  ].classList.add('active');
		});
	}
};

export const clickItem = () => {
	const accordions = [...document.querySelectorAll('.accordion__item')];

	for (const accordion of accordions) {
		const boxes = [
			...accordion.querySelectorAll('.accordion__content_item'),
		];

		let sum;
		let summaryText1;
		for (const box of boxes) {
			box.addEventListener('click', (e) => {
				if (box.classList.contains('invert')) {
					console.log('remove it');
					box.classList.remove('invert');
				} else {
					for (const b of boxes) {
						if (b.classList.contains('invert')) {
							b.classList.remove('invert');
						}
					}

					box.classList.add('invert');

					// Check if parent is first accordion and then check if the children are capulsule and do something

			

					const parentEl = box.parentElement.parentElement;

					if (parentEl.classList.contains('accord-1')) {
						// then remove first option
						if (box.children[0].textContent === 'Capsule') {
							document.querySelector(
								'.accord-4 img'
							).style.display = 'none';
						} else {
							document.querySelector(
								'.accord-4 img'
							).style.display = 'block';
						}
						// console.log(summaryText1)
					}

					if (parentEl.classList.contains('accord-3')) {
						// then remove first option
						if (box.children[0].textContent === '250g') {
							console.log('selected 250');

							document
								.querySelectorAll(
									'.accord-5 .accordion__content .accordion__content_item'
								)[0]
								.querySelector('p').textContent =
								'$7.20 per shipment. Includes free first-class shipping';

							document
								.querySelectorAll(
									'.accord-5 .accordion__content .accordion__content_item'
								)[1]
								.querySelector('p').textContent =
								'$9.60 per shipment. Includes free priority shipping';

							document
								.querySelectorAll(
									'.accord-5 .accordion__content .accordion__content_item'
								)[2]
								.querySelector('p').textContent =
								'$12.00 per shipment. Includes free priority shipping';

							console.log(
								document.querySelectorAll(
									'.accord-5 .accordion__content .accordion__content_item'
								)[0]
							);
						} else if (box.children[0].textContent === '500g') {
							console.log('selected 500');

							document
								.querySelectorAll(
									'.accord-5 .accordion__content .accordion__content_item'
								)[0]
								.querySelector('p').textContent =
								'$13.00 per shipment. Includes free first-class shipping';

							document
								.querySelectorAll(
									'.accord-5 .accordion__content .accordion__content_item'
								)[1]
								.querySelector('p').textContent =
								'$17.50 per shipment. Includes free priority shipping';

							document
								.querySelectorAll(
									'.accord-5 .accordion__content .accordion__content_item'
								)[2]
								.querySelector('p').textContent =
								'$22.00 per shipment. Includes free priority shipping';
						} else if (box.children[0].textContent === '1000g') {
							console.log('selected 1000');

							document
								.querySelectorAll(
									'.accord-5 .accordion__content .accordion__content_item'
								)[0]
								.querySelector('p').textContent =
								'$22.00 per shipment. Includes free first-class shipping';

							document
								.querySelectorAll(
									'.accord-5 .accordion__content .accordion__content_item'
								)[1]
								.querySelector('p').textContent =
								'$32.00 per shipment. Includes free priority shipping';

							document
								.querySelectorAll(
									'.accord-5 .accordion__content .accordion__content_item'
								)[2]
								.querySelector('p').textContent =
								'$42.00 per shipment. Includes free priority shipping';
						}
						// console.log(summaryText1)
					}

					if (parentEl.classList.contains('accord-5')) {
						if (box.children[0].textContent === 'Every week') {
							console.log('every week');
							sum = 4;
                            summaryText1 = box.children[1].textContent.split(' ')[0].replace('$', '')
                            
						} else if (
							box.children[0].textContent === 'Every 2 weeks'
						) {
							console.log('every 2 weeks');
							sum = 2;
                            summaryText1 = box.children[1].textContent.split(' ')[0].replace('$', '')
						} else if (
							box.children[0].textContent === 'Every month'
						) {
							console.log('every month');
							sum = 1;
                            summaryText1 = box.children[1].textContent.split(' ')[0].replace('$', '')
						}
					}
				}

				console.log(sum);
                console.log(summaryText1)

				let arr = [];

				const targetSummary = document.querySelector('.summary__box');

				const allActiveClass = [
					...document.querySelectorAll('.invert'),
				];

				for (const i of allActiveClass) {
					arr.push(i.children[0].textContent);
				}

				console.log(arr);

				if (arr.length === 4) {
					console.log('cap');
					let [how, type, much, often] = arr;

                    let summaryText =  `"I drink my coffee as <span>${how}</span>, with a <span>${type}</span> of bean. <span>${much}</span>, sent to me <span>${often}</span>."`;

					targetSummary.querySelector(
						'h3'
					).innerHTML = summaryText

					targetSummary.parentElement.classList.remove('hide');
					targetSummary.parentElement.classList.add('show');

					document
						.querySelector('.summary button')
						.addEventListener('click', () => {
							console.log('show modal');

							document
								.querySelector('.overlay')
								.classList.remove('hide');
							document
								.querySelector('.overlay')
								.classList.add('show');

							document.querySelector(
								'.modal .addText'
							).innerHTML = summaryText;

							document.querySelector(
								'.checkout .price'
							).innerHTML = `$${(sum * summaryText1).toFixed(2)}/mo`;
						});
				} else if (arr.length === 5) {
					console.log('no cap');
					let [how, type, much, grind, often] = arr;

					let summaryText = `"I drink my coffee as <span>${how}</span>, with a <span>${type}</span> of bean. <span>${much}</span> ground ala <span>${grind}</span>, sent to me <span>${often}</span>."`;

					targetSummary.querySelector('h3').innerHTML = summaryText;

					targetSummary.parentElement.classList.remove('hide');
					targetSummary.parentElement.classList.add('show');

					document
						.querySelector('.summary button')
						.addEventListener('click', () => {
							console.log('show modal');

							document
								.querySelector('.overlay')
								.classList.remove('hide');

							document
								.querySelector('.overlay')
								.classList.add('show');

							document.querySelector(
								'.modal .addText'
							).innerHTML = summaryText;

                            
                            console.log(sum);
                            console.log(summaryText1)
						document.querySelector(
								'.checkout .price'
							).innerHTML = `$${(sum * summaryText1).toFixed(2)}/mo`;
						});
				}
			});
		}
	}
};

export const clickSidebar = () => {
	const accordionWrapper = [...document.querySelectorAll('.accordion__item')];
	const accordItem = document.querySelectorAll('.accordion__item');

	const sidebarItem = [
		...document.querySelectorAll('.accordion__sidebar_item'),
	];

	sidebarItem.forEach((sidebar, index) => {
		sidebar.addEventListener('click', () => {
			sidebarItem.forEach((e) => e.classList.remove('active'));
			sidebar.classList.add('active');

			// loop through accords and remove active class
			accordionWrapper.forEach((a) => {
				a.classList.remove('show-accord');
				a.classList.add('hide-accord');
				a.querySelector('img').classList.remove('flip');
			});
			// display active class on the correct one that we have clicked
			setTimeout(() => {
				accordItem[index].classList.add('show-accord');
				accordItem[index].querySelector('img').classList.add('flip');
			}, 400);
			accordItem[index].scrollIntoView();
		});
	});
};

export const behaviours = () => {
	console.log('behaviours');

	// if capsules is selected then 'do not grind section is created';
};
