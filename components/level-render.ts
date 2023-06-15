import { cardsTableGenerate } from './cards-table';
import { headerRenderer } from './header';
import { resultRenderer } from './result_window';
export function levelPageRenderer({ app }: {app:HTMLElement}) {
    const appHtml = `<div class="header_component"></div>
    <div class="card_field grid_${localStorage.getItem('Level')}"> </div>
`;
    let backSideCards: string[] = [];
    for (let i = 0; i < 6 * Number(localStorage.getItem('Level')); i++) {
        backSideCards.push(
            `<div class="card" data-id='${i}'> <img src="./pic/backside.svg" alt="card-backside"> </div>`
        );
    }
    console.log(backSideCards);
    app.innerHTML = appHtml;
    const cardTable = cardsTableGenerate(backSideCards.length);
    (document.querySelector('.card_field') as HTMLElement).innerHTML =
        cardTable.join('');

    setTimeout(() => {
        (document.querySelector('.card_field') as HTMLElement)!.innerHTML =
            backSideCards.join('');
        let clickedCard: string[] = [];
        let controlArray: string[] = [];
        let startTime = Number(new Date());
        for (const card of document.querySelectorAll('.card')) {
            card.addEventListener('click', (event) => {
                event.stopPropagation();
                clickedCard.push(
                    cardTable[Number((card as HTMLElement).dataset.id)]
                );
                let targetCard = document.createElement('div');
                targetCard.innerHTML =
                    cardTable[Number((card as HTMLElement).dataset.id)]; // card.dataset.id
                card.replaceWith(targetCard);
                if (clickedCard.length === 2) {
                    if (clickedCard[0] === clickedCard[1]) {
                        controlArray.push('win');
                        clickedCard = [];
                    } else {
                        let finishTime = Number(new Date());
                        let fullGameTime = (finishTime - startTime) / 1000;
                        resultRenderer({ app }, 'loose', fullGameTime);
                    }
                }
                if (
                    controlArray.length ===
                    3 * Number(localStorage.getItem('Level'))
                ) {
                    let finishTime = Number(new Date());
                    let fullGameTime = (finishTime - startTime) / 1000;
                    resultRenderer({ app }, 'win', fullGameTime);
                }
            });
        }
    }, 5000);
    headerRenderer({ element: document.querySelector('.header_component') });
}
