// Dummy imports
import '../scss/main.scss';

import { toggleMenu } from './functions/menu';

import { clickItem, toggleAccordion, clickSidebar, behaviours } from './functions/accordion'
import { closeModal } from './functions/summary';

console.log('index loaded');
// menu();
toggleMenu();

toggleAccordion();
clickItem();
clickSidebar();
behaviours();
closeModal()

