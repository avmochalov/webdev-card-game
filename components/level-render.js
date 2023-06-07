import { cardsTableGenerate } from './cards-table.js';
import { headerRenderer } from './header.js';
export function levelPageRenderer({ app }) {
    const appHtml = `<div class="header_component"></div>
    <div class="card_field"> </div>
`;
    let backSideCards = [];
    for (let i = 0; i < 6 * Number(localStorage.getItem('Level')); i++) {
        backSideCards.push(
            `<div class="card" data-id='${i}'> <img src="./pic/backside.svg" alt="card-backside"> </div>`
        );
    }
    console.log(backSideCards);
    app.innerHTML = appHtml;
    const cardTable = cardsTableGenerate(backSideCards.length);
    document.querySelector('.card_field').innerHTML = cardTable.join('');

    setTimeout(() => {
        document.querySelector('.card_field').innerHTML =
            backSideCards.join('');
        let clickedCard = [];
        for (const card of document.querySelectorAll('.card')) {
            card.addEventListener('click', (event) => {
                event.stopPropagation();
                clickedCard.push(cardTable[card.dataset.id]);
                let targetCard = document.createElement('div');
                targetCard.innerHTML = cardTable[card.dataset.id];
                card.replaceWith(targetCard);
                if (clickedCard.length === 2) {
                    if (clickedCard[0] === clickedCard[1]) {
                        alert('Вы победили!');
                        clickedCard = [];
                    } else {
                        alert('Вы проиграли!');
                        clickedCard = [];
                    }
                }
            });
        }
    }, 2000);
    headerRenderer({ element: document.querySelector('.header_component') });
}
