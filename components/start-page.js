export function startPageRenderer({app}) {
    const appHtml = `<div class="level_choice__wrapper">
    <div class="level_choice">
        <p class="level_choice__text">Выбери сложность</p>
        <div class="radio-toolbar">
            <input type="radio" id="radio1" name="radios" value="1" checked>
            <label class="radio-toolbar__value" for="radio1">1</label>

            <input type="radio" id="radio2" name="radios" value="2">
            <label class="radio-toolbar__value" for="radio2">2</label>

            <input type="radio" id="radio3" name="radios" value="3">
            <label class="radio-toolbar__value" for="radio3">3</label>
        </div>
        <button class="start_button">Старт</button>
    </div>
</div>`
app.innerHTML = appHtml;
}