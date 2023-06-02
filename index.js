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
