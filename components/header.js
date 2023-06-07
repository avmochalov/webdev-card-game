import { renderApp } from '../index.js';

export function headerRenderer({ element }) {
    element.innerHTML = `<header class="header">
    <div class="timer">
        <div class="timer_min">
            <div class="timer_name">min</div>
            <div class="timer_counter">00</div>
        </div>
        <div class="timer_sec">
            <div class="timer_name">sec</div>
            <div class="point timer_counter">00</div>
        </div>
    </div>
    <button type="submit" class="restart_button">
        Начать заново
    </button>
    </header>`;
    document
        .querySelector('.restart_button')
        .addEventListener('click', () => renderApp('level'));
}
