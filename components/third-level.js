import { cardsTableGenerate } from './cards-table.js';
import { headerRenderer } from './header.js';
export function thirdLevelPageRenderer({ app }) {
    const appHtml = `<div class="header_component"></div>
    <div class="card_field"> </div>
`;
    let backSideCards = [];
    for (let i = 0; i < 18; i++) {
        backSideCards.push(
            '<img src="./pic/backside.svg" alt="card-backside">'
        );
    }
    console.log(backSideCards);
    app.innerHTML = appHtml;
    document.querySelector('.card_field').innerHTML = backSideCards.join('');
    setTimeout(
        () =>
            (document.querySelector('.card_field').innerHTML =
                cardsTableGenerate(18)),
        2000
    );
    headerRenderer({ element: document.querySelector('.header_component') });
}
