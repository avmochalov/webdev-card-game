import { START_PAGE } from "./routes.js";
import { startPageRenderer } from "./components/start-page.js"
let page = null;

function renderApp(page) {
    const app = document.getElementById('app');
    if (page === START_PAGE) {
        startPageRenderer ({app})
    }
}
renderApp(START_PAGE);