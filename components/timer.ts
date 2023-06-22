export function timer(controlArray: string[]) {
    let counter = 0;
    setInterval(() => {
        counter++;
        const min = String(Math.trunc(counter / 60));
        const sec = String(Math.round(counter % 60));
        const timerElement = document.querySelector('.timer');
        if (controlArray.length === 3 * Number(localStorage.getItem('Level'))) {
            return;
        }
        if (timerElement instanceof HTMLElement) {
            timerElement.innerHTML = `<div class="timer_min">
<div class="timer_name">min</div>
<div class="timer_counter">${min.length < 2 ? '0' + min : min}</div>
</div>
<div class="timer_sec">
<div class="timer_name">sec</div>
<div class="point timer_counter">${sec.length < 2 ? '0' + sec : sec}</div>
</div>`;
        }
    }, 1000);
}
