// Dummy imports
import '../scss/main.scss';

import { toggleMenu } from './functions/menu';

import { clickItem, toggleAccordion, clickSidebar, behaviours } from './functions/accordion'

console.log('index loaded');
// menu();
toggleMenu();

toggleAccordion();
clickItem();
clickSidebar();
behaviours();

