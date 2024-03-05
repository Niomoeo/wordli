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

    const lengthDisplay = document.getElementById('lengthDisplay');
    lengthDisplay.innerText = content.length;
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
        setDefaultWordsLS();
        words = JSON.parse(localStorage.getItem('words'));
        reloadReveal(words);
    }
}

document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addWord();
    }
});
