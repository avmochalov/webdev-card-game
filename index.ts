import './style.css';
import { START_PAGE, LEVEL_PAGE } from './routes';
import { startPageRenderer } from './components/start-page';
import { levelPageRenderer } from './components/level-render';

const suitArray = ['Ч', 'П', 'Б', 'К'];
const cardValueArray = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6'];
export const cards : string[]= [];

for (const suit of suitArray) {
    for (const value of cardValueArray) {
        cards.push(suit + value);
    }
}

export function renderApp(page: string) {
    const app = document.getElementById('app') as HTMLElement;
    if (page === START_PAGE) {
        startPageRenderer({ app });
    }
    if (page === LEVEL_PAGE) {
        levelPageRenderer({ app });
    }
}
renderApp(START_PAGE);
