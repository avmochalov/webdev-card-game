import {
    START_PAGE,
    FIRST_LEVEL,
    SECOND_LEVEL,
    THIRD_LEVEL,
} from './routes.js';
import { startPageRenderer } from './components/start-page.js';
import { firstLevelPageRenderer } from './components/first-level.js';
import { secondLevelPageRenderer } from './components/second-level.js';
import { thirdLevelPageRenderer } from './components/third-level.js';

const suitArray = ['Ч', 'П', 'Б', 'К'];
const cardValueArray = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6'];
export const cards = [];

for (const suit of suitArray) {
    for (const value of cardValueArray) {
        cards.push(suit + value);
    }
}

export function renderApp(page) {
    const app = document.getElementById('app');
    if (page === START_PAGE) {
        startPageRenderer({ app });
    }
    if (page === FIRST_LEVEL) {
        firstLevelPageRenderer({ app });
    }
    if (page === SECOND_LEVEL) {
        secondLevelPageRenderer({ app });
    }
    if (page === THIRD_LEVEL) {
        thirdLevelPageRenderer({ app });
    }
}
renderApp(START_PAGE);
