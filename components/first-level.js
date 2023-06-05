import { cardsTableGenerate } from './cards-table.js';
import { headerRenderer } from './header.js';
export function firstLevelPageRenderer({ app }) {
    const appHtml = `<div class="header_component"></div>
    <div class="card_field"> </div>
`;
    app.innerHTML = appHtml;
    document.querySelector('.card_field').innerHTML = cardsTableGenerate(6);
    headerRenderer({ element: document.querySelector('.header_component') });
}
