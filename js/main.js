var words = JSON.parse(localStorage.getItem('words')) || [];

const getRandomIndex = function (maxValue) {
    return Math.floor(Math.random() * maxValue);
};

const victory = document.getElementById('victory');
const gameOver = document.getElementById('gameOver');
const startButton = document.getElementById('startNewGame');
const pageContent = document.getElementById('pageContent');
const scoreboardParent = document.getElementById('scoreboardParent');
const maxScore = document.getElementById('maxScore');
const endGame = function () {
    pageContent.style.display = "none";

    let score = Number(document.getElementById('scoreboard').innerHTML);
    let maxScore = Number(document.getElementById('maxScore').innerHTML);
    let scoreDifference = Math.round((score / maxScore) * 100 * 10) / 10;
    // when the score is >= 90% of maxScore, you win
    if (scoreDifference >= 90) {
        victory.style.display = "block";
        startButton.style.display = "block";
        scoreboardParent.style.color = "greenyellow";

        startButton.style.top = "95px";
        alert('Your percentage is: ' + scoreDifference + '%. You have over 90% correct and win! PeepoHappy');
    } else {
        gameOver.style.display = "block";
        startButton.style.display = "block";
        startButton.style.top = "95px";
        scoreboardParent.style.color = "red";
        alert('Your percentage is: ' + scoreDifference + "%. You don't have 90% correct and lose :(");
    };
};
const startNewGame = function () {
    if (words.length >= 1) {
        victory.style.display = "none";
        gameOver.style.display = "none";
        startButton.style.display = "none";
        pageContent.style.display = "flex";
        scoreboardParent.style.color = "black";
        scoreboardParent.style.display = "block";

        words = JSON.parse(localStorage.getItem('words')) || [];
        maxScore.innerHTML = words.length;
        nextWord();
    } else if (words.length === 0) {
        alert('You have to add some words before you can test.');
    };
};

document.addEventListener('DOMContentLoaded', function () {
    pageContent.style.display = "none";

    startButton.style.display = "block";
    startButton.style.top = "calc(50% - 15px)";
    startButton.style.right = "calc(50% - 100px)";
});

const solutionDiv = document.getElementById('solutionDiv');
const toggleSolution = function () {
    const solutionTable = document.getElementById('solutionTable');
    if (solutionTable.classList.contains('nodisplay')) {
        solutionDiv.style.animation = "openSolution 500ms";
        solutionDiv.style.animationFillMode = "forwards";
        setTimeout(() => {
            solutionTable.classList.remove('nodisplay');
        }, 500);
    } else {
        solutionDiv.style.animation = "closeSolution 500ms";
        solutionDiv.style.animationFillMode = "forwards";
        solutionTable.classList.add('nodisplay');
    };
};

const updateSolutionDisplay = function (newWord) {
    const infinitiveDisplay = document.getElementById('infinitiveSolutionDisplay');
    const simplePastDisplay = document.getElementById('simplePastSolutionDisplay');
    const pastParticipleDisplay = document.getElementById('pastParticipleSolutionDisplay');

    infinitiveDisplay.innerText = newWord.infinitive;
    simplePastDisplay.innerText = newWord.simplePast;
    pastParticipleDisplay.innerText = newWord.pastParticiple;
}

const solutionHead = document.getElementById('solutionHead');
solutionHead.addEventListener('click', function () {
    toggleSolution();
});

const nextWord = function () {
    const germanSpan = document.getElementById("german");
    const infinitiveInput = document.getElementById("infinitive");
    const simplePastInput = document.getElementById("simplePast");
    const pastParticipleInput = document.getElementById("pastParticiple");

    infinitiveInput.value = "";
    simplePastInput.value = "";
    pastParticipleInput.value = "";

    const checkButton = document.getElementById("checkButton");
    const nextButton = document.getElementById("nextButton");
    checkButton.style.display = "block";
    checkButton.style.backgroundColor = "rgb(208, 208, 208)";
    nextButton.style.display = "none";

    if (words.length <= 0) {
        endGame();
        console.log("isch fertig");
        return;
    };

    const wordsIndex = getRandomIndex(words.length);
    const wordObject = words[wordsIndex];
    console.log(wordsIndex, "\n", wordObject);

    updateSolutionDisplay(wordObject);
    solutionDiv.style.display = "none";

    germanSpan.innerHTML = wordObject.german;
    infinitiveInput.setAttribute("dataSolution", wordObject.infinitive);
    simplePastInput.setAttribute("dataSolution", wordObject.simplePast);
    pastParticipleInput.setAttribute("dataSolution", wordObject.pastParticiple);

    infinitiveInput.focus();

    let index = words.findIndex(function (word) {
        return word.german === wordObject.german;
    });
    if (index !== -1) {
        words.splice(index, 1);
    }
};

// todo ! muss noch komplexer sein mit attribut () wo man sagen kann welche inputs z.B. grau werden.
/* const infinitiveInput = document.getElementById("infinitive");
const simplePastInput = document.getElementById("simplePast");
const pastParticipleInput = document.getElementById("pastParticiple");
const inputsArray = [infinitiveInput, simplePastInput, pastParticipleInput];
const inputsGrey = function () {
    
};
const inputsRed = function () {
    
};
const blockInputs = function () {
    
};
const resetInputs = function () {
    
}; */

var falseAttempts = 0;
const checkSolution = function (doCorrect) {
    // todo ! die drei nachfolgenden consts müssen entfernt werden, wenn der kommentar oben verschwindet
    const infinitiveInput = document.getElementById("infinitive");
    const simplePastInput = document.getElementById("simplePast");
    const pastParticipleInput = document.getElementById("pastParticiple");

    const checkButton = document.getElementById("checkButton");
    const nextButton = document.getElementById("nextButton");

    if (doCorrect || infinitiveInput.value == infinitiveInput.getAttribute("dataSolution") && simplePastInput.value == simplePastInput.getAttribute("dataSolution") && pastParticipleInput.value == pastParticipleInput.getAttribute("dataSolution")) {
        checkButton.style.display = "none";
        checkButton.style.backgroundColor = "unset";
        nextButton.style.display = "block";
        nextButton.style.backgroundColor = "greenyellow";
        falseAttempts = 0;
        plusScore();
    } else {
        if (falseAttempts >= 2) {
            checkButton.style.display = "none";
            checkButton.style.backgroundColor = "unset";
            nextButton.style.display = "block";
            nextButton.style.backgroundColor = "red";
            solutionDiv.style.display = "block";
            falseAttempts = 0;
            return;
        }
        checkButton.style.backgroundColor = "rgba(255, 0, 0, 0.821)";
        minusScore();
        falseAttempts++;
    };
};

const clearLocalStorageMain = function () {
    localStorage.setItem("words", JSON.stringify([]));
    words = [];
};

const scoreboard = document.getElementById('scoreboard');
const plusScore = function () {
    let currentScore = scoreboard.innerHTML;
    let currentScoreNumber = Number(currentScore);
    scoreboard.innerHTML = currentScoreNumber + 1;
    scoreboard.style.color = "black";
    if (currentScoreNumber < 0) {
        scoreboard.style.color = "red";
    };
};
const minusScore = function () {
    let currentScore = scoreboard.innerHTML;
    let currentScoreNumber = Number(currentScore);
    scoreboard.innerHTML = currentScoreNumber - 1;
    scoreboard.style.color = "red";
};

document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        const nextButton = document.getElementById('nextButton');
        const checkButton = document.getElementById('checkButton');

        if (window.getComputedStyle(nextButton).display === 'block') {
            nextWord();
        } else if (window.getComputedStyle(checkButton).display === 'block') {
            checkSolution();
        };

        const enter = document.getElementById('enter');
        enter.style.fontWeight = "600";
        enter.style.fontSize = "17px";
        setTimeout(() => {
            enter.style.fontWeight = "400";
            enter.style.fontSize = "13px"
        }, 700);
    };
});