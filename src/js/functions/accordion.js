export const toggleAccordion = () => {

    const arrows = [...document.querySelectorAll('.accordion__text img')]

    for (const arrow of arrows) {
        arrow.addEventListener('click', (e) => {
            const target = e.target;
            const parent = target.parentElement
            const sibling = parent.nextElementSibling;

            if ( sibling.classList.contains('show')) {
                sibling.classList.remove('show')
                sibling.classList.add('hide')
            } else {
                sibling.classList.remove('hide')
                sibling.classList.add('show')
            }
            target.classList.toggle('flip')
            
        })
    }
}

export const clickItem = () => {
       const accordions = [...document.querySelectorAll('.accordion__item')];

       for (const accordion of accordions) {
           const boxes =  [...accordion.querySelectorAll('.accordion__content_item')]

           for (const box of boxes) {
               box.addEventListener('click', () => {

                    for (const b of boxes) {
                        if (b.classList.contains('invert')) {
                            b.classList.remove('invert')
                        }
                    }

                    box.classList.add('invert')
                    
               })
           }
       }
}