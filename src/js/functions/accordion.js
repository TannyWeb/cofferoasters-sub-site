export const toggleAccordion = () => {

    const arrows = [...document.querySelectorAll('.accordion__text img')]

    for (const arrow of arrows) {
        arrow.addEventListener('click', (e) => {
            const target = e.target;
            const parent = target.parentElement
            const sibling = parent.nextElementSibling;
            // sibling.classList.toggle('hide')

            if ( sibling.classList.contains('show')) {
                sibling.classList.remove('show')
                sibling.classList.add('hide')
            } else {
                sibling.classList.remove('hide')
                sibling.classList.add('show')
            }
            console.log(sibling)
            target.classList.toggle('flip')
            
        })
    }
}