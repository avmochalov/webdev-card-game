import { cards } from '../index.js';
export function cardsTableGenerate(value) {
    const randomCards = [];
    for (let i = 0; i < value / 2; i++) {
        randomCards.push(
            cards[Math.round(0 - 0.5 + Math.random() * (35 - 0 + 1))]
        );
    }
    const gameCardSet = randomCards
        .concat(randomCards)
        .sort(() => 0.5 - Math.random());
    console.log(gameCardSet);
    const cardsTable = gameCardSet.map((card) => {
        let suit;
        switch (card.charAt(0)) {
            case 'П':
                suit = './pic/pik.svg';
                break;
            case 'Ч':
                suit = './pic/che.svg';
                break;
            case 'Б':
                suit = './pic/bub.svg';
                break;
            case 'К':
                suit = './pic/krest.svg';
                break;
            default:
                break;
        }
        return `<div class="card" data-cardValue='${card}'>
            <p class="card_value__up">${card.slice(1)}</p>
            <p class="card_value__down">${card.slice(1)}</p>
            <img src="${suit}" alt="pik" class="suit_big">
            <img src="${suit}" alt="pik" class="suit_small__up">
            <img src="${suit}" alt="pik" class="suit_small__down">
        </div>`;
    });
    return cardsTable;
}
