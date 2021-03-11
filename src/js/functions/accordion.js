export const toggleAccordion = () => {

    const arrows = [...document.querySelectorAll('.accordion__text img')]

    for (const arrow of arrows) {
        arrow.addEventListener('click', (e) => {
            const target = e.target;
            const parent = target.parentElement
            const sibling = parent.nextElementSibling;
            sibling.classList.toggle('hide')
            console.log(sibling)
            target.classList.toggle('flip')
            
        })
    }
}