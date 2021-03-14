
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
               box.addEventListener('click', (e) => {

                   if(box.classList.contains('invert')) {

                       console.log('remove it')
                       box.classList.remove('invert')
                   } else {
                
                    for (const b of boxes) {
                        if (b.classList.contains('invert')) {
                            b.classList.remove('invert')
                        }
                    }


                    box.classList.add('invert')

                    // Check if parent is first accordion and then check if the children are capulsule and do something

                    let summaryText1;

                    const parentEl = box.parentElement.parentElement;

                    if (parentEl.classList.contains('accord-1')) {
                        // then remove first option
                        if (box.children[0].textContent === 'Capsule') {
    
                            document.querySelector('.accord-4 img').style.display = 'none';


                        } else {
                             document.querySelector('.accord-4 img').style.display = 'block';
    


                        }
                        // console.log(summaryText1)
                    } 



                    }

                    let arr = [];

                    const targetSummary = document.querySelector('.summary__box')

                    console.log([...document.querySelectorAll('.invert')].length)

                    const allActiveClass = [...document.querySelectorAll('.invert')];


                        for (const i of allActiveClass) {
                            arr.push(i.children[0].textContent)
                        }

               

                    console.log(arr)

                    if (arr.length === 4) {
                        console.log('cap')
                        let [how, type, much, often] = arr;

                            targetSummary.querySelector('h3').innerHTML = `"I drink my coffee as <span>${how}</span>, with a <span>${type}</span> of bean. <span>${much}</span>, sent to me <span>${often}</span>."`;

                        
                            targetSummary.parentElement.classList.remove('hide')
                            targetSummary.parentElement.classList.add('show')

                    } else if (arr.length === 5) {
                        console.log('no cap');
                        let [how, type, much, grind, often] = arr;
   
                            targetSummary.querySelector('h3').innerHTML = `"I drink my coffee as <span>${how}</span>, with a <span>${type}</span> of bean. <span>${much}</span> ground ala <span>${grind}</span>, sent to me <span>${often}</span>."`;

                            targetSummary.parentElement.classList.remove('hide')
                            targetSummary.parentElement.classList.add('show')

                    }

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

export const behaviours = () => {
    console.log('behaviours')

    // if capsules is selected then 'do not grind section is created';



}