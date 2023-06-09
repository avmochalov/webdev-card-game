import { renderApp } from '../index.js';

export function resultRenderer({ app }, result) {
    app.appendChild(document.createElement('div')).classList.add('opacity');
    app.appendChild(document.createElement('div')).classList.add('result');
    document.querySelector('.result').innerHTML = `
        <img src="${
            result === 'win' ? './pic/win.svg' : './pic/loose.svg'
        }" class="result_svg" alt="win">
        <p class="result_text__header">${
            result === 'win' ? 'Вы победили!' : 'Вы проиграли!'
        }</p>
        <p class="result_text__timer">Затраченное время:</p>
        <p class="result_text__time">01.20</p>
        <button type="submit" class="restart_button">Играть снова</button>
        `;
    for (const button of document.querySelectorAll('.restart_button')) {
        button.addEventListener('click', () => renderApp('start'));
    }
}

// `<div class="result">
// <img src="./pic/win.svg" class="result_svg" alt="win">
// <p class="result_text__header">Вы выиграли!</p>
// <p class="result_text__timer">Затраченное время:</p>
// <p class="result_text__time">01.20</p>
// <button type="submit" class="restart_button">Играть снова</button>
// </div>`;
