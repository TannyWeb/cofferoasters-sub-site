export const toggleAccordion = () => {

    const arrows = [...document.querySelectorAll('.accordion__text img')]

    for (const arrow of arrows) {
        arrow.addEventListener('click', (e) => {
            const target = e.target;
            const parent = target.parentElement
            // const sibling = parent.nextElementSibling;
            const mainParent = parent.parentElement;

            if ( mainParent.classList.contains('show-accord')) {
                mainParent.classList.remove('show-accord')
                mainParent.classList.add('hide-accord')
            } else {
                mainParent.classList.remove('hide-accord')
                mainParent.classList.add('show-accord')
            }
            target.classList.toggle('flip')

            console.log(mainParent.getAttribute('accord'));

            // loop through sidebar and remove active class on click
            
            const sidebarItem = document.querySelectorAll('.accordion__sidebar_item')


            for ( const sidebar of [...sidebarItem]) {
                if (sidebar.classList.contains('active')) {
                    sidebar.classList.remove('active')
                }
            }
 

            sidebarItem[mainParent.getAttribute('accord') -1].classList.contains('active') ? sidebarItem[mainParent.getAttribute('accord') -1].classList.remove('active') : sidebarItem[mainParent.getAttribute('accord') -1].classList.add('active');

            
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

export const clickSidebar = () => {

        const accordionWrapper = [...document.querySelectorAll('.accordion__item')];
        const accordItem = document.querySelectorAll('.accordion__item');

        const sidebarItem = [...document.querySelectorAll('.accordion__sidebar_item')];


            sidebarItem.forEach((sidebar, index) => {

                
                sidebar.addEventListener('click', () => {
                    sidebarItem.forEach(e => e.classList.remove('active'))
                    sidebar.classList.add('active');
    
                    // loop through accords and remove active class
                    accordionWrapper.forEach(a => {
                        a.classList.remove('show-accord');
                        a.classList.add('hide-accord')
                        a.querySelector('img').classList.remove('flip')
                    })
                    // display active class on the correct one that we have clicked
                    setTimeout(() => {
                        
                        accordItem[index].classList.add('show-accord')
                        accordItem[index].querySelector('img').classList.add('flip')
                    }, 400);
                    accordItem[index].scrollIntoView();

                })
            })
        
}