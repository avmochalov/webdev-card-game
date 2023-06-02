export function secondLevelPageRenderer({ app }) {
    const appHtml = `<div class="level_choice__wrapper">
    <div class="level_choice">
        <p class="level_choice__text">Уровень 2</p>
    </div>
</div>`

    app.innerHTML = appHtml
}
