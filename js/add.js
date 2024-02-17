var words = JSON.parse(localStorage.getItem('words')) || [];

const revealDivElement = document.getElementById('revealDiv');
const revealDivInside = document.getElementById('revealDivInside');
const openReveal = function () {
    revealDivElement.style.animation = "openReveal 1s";
    setTimeout(function () {
        revealDivElement.style.height = "90vh";
        revealDivElement.style.width = "90vh";

        revealDivInside.style.display = "flex";
    }, 1000);
}
const closeReveal = function () {
    revealDivElement.style.animation = "closeReveal 1s";
    revealDivInside.style.display = "none";
    setTimeout(function () {
        revealDivElement.style.height = "0";
        revealDivElement.style.width = "0";
    }, 1000);
}

const reloadReveal = function (content) {
    const tableElement = document.getElementById('revealTable');

    tableElement.innerHTML = `
    <tr>
        <th>In german</th>
        <th>Infinitive</th>
        <th>Simple past</th>
        <th>Past participle</th>
    </tr>
    `

    for (let word of content) {
        tableElement.innerHTML += `
        <tr>
            <td>${word.german}</td>
            <td>${word.infinitive}</td>
            <td>${word.simplePast}</td>
            <td>${word.pastParticiple}</td>
        </tr>
        `
    }
}
reloadReveal(words);

const addWord = function () {
    words = JSON.parse(localStorage.getItem('words')) || [];

    const german = document.getElementById('german');
    const infinitive = document.getElementById('infinitive');
    const simplePast = document.getElementById('simplePast');
    const pastParticiple = document.getElementById('pastParticiple');

    words.push({
        german: german.value,
        infinitive: infinitive.value,
        simplePast: simplePast.value,
        pastParticiple: pastParticiple.value
    });

    localStorage.setItem("words", JSON.stringify(words));

    reloadReveal(words);

    german.focus();

    german.value = "";
    infinitive.value = "";
    simplePast.value = "";
    pastParticiple.value = "";
}

const removeAllWords = function () {
    if (confirm('Are you sure you want to delete all words?')) {
        localStorage.setItem("words", JSON.stringify([]));
        words = [];
        reloadReveal(words);
    }
}

const setDefaultWords = function () {
    if (confirm('Are you sure you want to replace all of your words?')) {
        localStorage.setItem("words", '[{"german":"sein","infinitive":"be","simplePast":"was/were","pastParticiple":"been"},{"german":"etwas tragen","infinitive":"bear","simplePast":"bore","pastParticiple":"born"},{"german":"schlagen","infinitive":"beat","simplePast":"beat","pastParticiple":"beaten"},{"german":"werden","infinitive":"become","simplePast":"became","pastParticiple":"become"},{"german":"beginnen","infinitive":"begin","simplePast":"began","pastParticiple":"begun"},{"german":"biegen","infinitive":"bend","simplePast":"bent","pastParticiple":"bent"},{"german":"wetten","infinitive":"bet","simplePast":"bet","pastParticiple":"bet"},{"german":"bieten","infinitive":"bid","simplePast":"bid","pastParticiple":"bid"},{"german":"binden","infinitive":"bind","simplePast":"bound","pastParticiple":"bound"},{"german":"beissen","infinitive":"bite","simplePast":"bit","pastParticiple":"bitten"},{"german":"bluten","infinitive":"bleed","simplePast":"bled","pastParticiple":"bled"},{"german":"blasen","infinitive":"blow","simplePast":"blew","pastParticiple":"blown"},{"german":"kaputtgehen","infinitive":"break","simplePast":"broke","pastParticiple":"broken"},{"german":"züchten","infinitive":"breed","simplePast":"bred","pastParticiple":"bred"},{"german":"bringen","infinitive":"bring","simplePast":"brought","pastParticiple":"brought"},{"german":"senden","infinitive":"broadcast","simplePast":"broadcast","pastParticiple":"broadcast"},{"german":"bauen","infinitive":"build","simplePast":"built","pastParticiple":"built"},{"german":"brennen","infinitive":"burn","simplePast":"burnt","pastParticiple":"burnt"},{"german":"kaufen","infinitive":"buy","simplePast":"bought","pastParticiple":"bought"},{"german":"werfen","infinitive":"cast","simplePast":"cast","pastParticiple":"cast"},{"german":"fangen","infinitive":"catch","simplePast":"caught","pastParticiple":"caught"},{"german":"aussuchen","infinitive":"choose","simplePast":"chose","pastParticiple":"chosen"},{"german":"kommen","infinitive":"come","simplePast":"came","pastParticiple":"come"},{"german":"kosten","infinitive":"cost","simplePast":"cost","pastParticiple":"cost"}]');
        words = JSON.parse(localStorage.getItem('words'));
        reloadReveal(words);
    }
}

document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addWord();
    }
});