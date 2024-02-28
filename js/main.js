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
        if(confirm('You have to add some words before you can test. Press "OK" to add the default words.')) {
            if(confirm('Are you shure you want to replace all words?')) {
                localStorage.setItem("words", '[{"german":"sein","infinitive":"be","simplePast":"was/were","pastParticiple":"been"},{"german":"etwas tragen","infinitive":"bear","simplePast":"bore","pastParticiple":"born"},{"german":"schlagen","infinitive":"beat","simplePast":"beat","pastParticiple":"beaten"},{"german":"biegen","infinitive":"bend","simplePast":"bent","pastParticiple":"bent"},{"german":"wetten","infinitive":"bet","simplePast":"bet","pastParticiple":"bet"},{"german":"bieten","infinitive":"bid","simplePast":"bid","pastParticiple":"bid"},{"german":"binden","infinitive":"bind","simplePast":"bound","pastParticiple":"bound"},{"german":"beissen","infinitive":"bite","simplePast":"bit","pastParticiple":"bitten"},{"german":"bluten","infinitive":"bleed","simplePast":"bled","pastParticiple":"bled"},{"german":"blasen","infinitive":"blow","simplePast":"blew","pastParticiple":"blown"},{"german":"zerbrechen","infinitive":"break","simplePast":"broke","pastParticiple":"broken"},{"german":"züchten","infinitive":"breed","simplePast":"bred","pastParticiple":"bred"},{"german":"(mit-)bringen","infinitive":"bring","simplePast":"brought","pastParticiple":"brought"},{"german":"übertragen, senden","infinitive":"broadcast","simplePast":"broadcast","pastParticiple":"broadcast"},{"german":"bauen","infinitive":"build","simplePast":"built","pastParticiple":"built"},{"german":"brennen","infinitive":"burn","simplePast":"burnt","pastParticiple":"burnt"},{"german":"kaufen","infinitive":"buy","simplePast":"bought","pastParticiple":"bought"},{"german":"werfen (Schatten)","infinitive":"cast","simplePast":"cast","pastParticiple":"cast"},{"german":"fangen","infinitive":"catch","simplePast":"caught","pastParticiple":"caught"},{"german":"(aus-)wählen","infinitive":"choose","simplePast":"chose","pastParticiple":"chosen"},{"german":"kommen","infinitive":"come","simplePast":"came","pastParticiple":"come"},{"german":"kosten","infinitive":"cost","simplePast":"cost","pastParticiple":"cost"},{"german":"kriechen","infinitive":"creep","simplePast":"crept","pastParticiple":"crept"},{"german":"(aus)schneiden","infinitive":"cut","simplePast":"cut","pastParticiple":"cut"},{"german":"verhandeln","infinitive":"deal","simplePast":"dealt","pastParticiple":"dealt"},{"german":"graben","infinitive":"dig","simplePast":"dug","pastParticiple":"dug"},{"german":"tauchen","infinitive":"dive","simplePast":"dove","pastParticiple":"dived"},{"german":"tun, machen","infinitive":"do","simplePast":"did","pastParticiple":"done"},{"german":"zeichnen","infinitive":"draw","simplePast":"drew","pastParticiple":"drawn"},{"german":"zeichnen","infinitive":"draw","simplePast":"drew","pastParticiple":"drawn"},{"german":"träumen","infinitive":"dream","simplePast":"dreamt","pastParticiple":"dreamt"},{"german":"trinken","infinitive":"drink","simplePast":"drank","pastParticiple":"drunk"},{"german":"(ein Auto) fahren","infinitive":"drive","simplePast":"drove","pastParticiple":"driven"},{"german":"essen","infinitive":"eat","simplePast":"ate","pastParticiple":"eaten"},{"german":"(hin-)fallen","infinitive":"fall","simplePast":"fell","pastParticiple":"fallen"},{"german":"füttern","infinitive":"feed","simplePast":"fed","pastParticiple":"fed"},{"german":"(sich) fühlen","infinitive":"feel","simplePast":"felt","pastParticiple":"felt"},{"german":"kämpfen","infinitive":"fight","simplePast":"fought","pastParticiple":"fought"},{"german":"finden","infinitive":"find","simplePast":"found","pastParticiple":"found"},{"german":"fliegen","infinitive":"fly","simplePast":"flew","pastParticiple":"flown"},{"german":"verbieten","infinitive":"forbid","simplePast":"forbade","pastParticiple":"forbidden"},{"german":"vergessen","infinitive":"forget","simplePast":"forgot","pastParticiple":"forgotten"},{"german":"vergessen","infinitive":"forget","simplePast":"forgot","pastParticiple":"forgotten"},{"german":"frieren","infinitive":"freeze","simplePast":"froze","pastParticiple":"frozen"},{"german":"kriegen, holen","infinitive":"get","simplePast":"got","pastParticiple":"got"},{"german":"geben","infinitive":"give","simplePast":"gave","pastParticiple":"given"},{"german":"gehen","infinitive":"go","simplePast":"went","pastParticiple":"gone"},{"german":"wachsen","infinitive":"grow","simplePast":"grew","pastParticiple":"grown"},{"german":"(auf-)hängen","infinitive":"hang","simplePast":"hung","pastParticiple":"hung"},{"german":"haben","infinitive":"have","simplePast":"had","pastParticiple":"had"},{"german":"hören","infinitive":"hear","simplePast":"heard","pastParticiple":"heard"},{"german":"verstecken","infinitive":"hide","simplePast":"hid","pastParticiple":"hidden"},{"german":"schlagen, treffen","infinitive":"hit","simplePast":"hid","pastParticiple":"hidden"},{"german":"halten","infinitive":"hold","simplePast":"held","pastParticiple":"held"},{"german":"verletzen","infinitive":"hurt","simplePast":"hurt","pastParticiple":"hurt"},{"german":"behalten","infinitive":"keep","simplePast":"kept","pastParticiple":"kept"},{"german":"wissen, kennen","infinitive":"know","simplePast":"knew","pastParticiple":"known"},{"german":"legen","infinitive":"lay","simplePast":"laid","pastParticiple":"laid"},{"german":"führen, leiten","infinitive":"lead","simplePast":"led","pastParticiple":"led"},{"german":"lernen","infinitive":"learn","simplePast":"learnt","pastParticiple":"learnt"},{"german":"weggehen","infinitive":"leave","simplePast":"left","pastParticiple":"left"},{"german":"verleihen","infinitive":"lend","simplePast":"lent","pastParticiple":"lent"},{"german":"lassen","infinitive":"let","simplePast":"let","pastParticiple":"let"},{"german":"liegen","infinitive":"lie","simplePast":"lay","pastParticiple":"lain"},{"german":"anzünden","infinitive":"light","simplePast":"lit","pastParticiple":"lit"},{"german":"verlieren","infinitive":"lose","simplePast":"lost","pastParticiple":"lost"},{"german":"herstellen, machen","infinitive":"make","simplePast":"made","pastParticiple":"made"},{"german":"bedeuten","infinitive":"mean","simplePast":"meant","pastParticiple":"meant"},{"german":"(sich) treffen","infinitive":"meet","simplePast":"met","pastParticiple":"met"},{"german":"überholen","infinitive":"overtake","simplePast":"overtook","pastParticiple":"overtaken"},{"german":"bezahlen","infinitive":"pay","simplePast":"paid","pastParticiple":"paid"},{"german":"beweisen","infinitive":"prove","simplePast":"proved","pastParticiple":"proven"},{"german":"stellen, legen","infinitive":"put","simplePast":"put","pastParticiple":"put"},{"german":"aufhören","infinitive":"quit","simplePast":"quit","pastParticiple":"quit"},{"german":"lesen","infinitive":"read","simplePast":"read","pastParticiple":"read"},{"german":"(von etwas) befreien","infinitive":"rid","simplePast":"rid","pastParticiple":"rid"},{"german":"reiten, fahren","infinitive":"ride","simplePast":"rode","pastParticiple":"ridden"},{"german":"klingeln","infinitive":"ring","simplePast":"rang","pastParticiple":"rung"},{"german":"aufgehen","infinitive":"rise","simplePast":"rose","pastParticiple":"risen"},{"german":"rennen","infinitive":"run","simplePast":"ran","pastParticiple":"run"},{"german":"sägen","infinitive":"saw","simplePast":"sawed","pastParticiple":"sawn"},{"german":"sagen","infinitive":"say","simplePast":"said","pastParticiple":"said"},{"german":"sehen","infinitive":"see","simplePast":"saw","pastParticiple":"seen"},{"german":"suchen","infinitive":"seek","simplePast":"sought","pastParticiple":"sought"},{"german":"verkaufen","infinitive":"sell","simplePast":"sold","pastParticiple":"sold"},{"german":"senden, schicken","infinitive":"send","simplePast":"sent","pastParticiple":"sent"},{"german":"setzen, stellen","infinitive":"set","simplePast":"set","pastParticiple":"set"},{"german":"schütteln","infinitive":"shake","simplePast":"shook","pastParticiple":"shaken"},{"german":"scheinen","infinitive":"shine","simplePast":"shone","pastParticiple":"shone"},{"german":"schiessen","infinitive":"shoot","simplePast":"shot","pastParticiple":"shot"},{"german":"zeigen","infinitive":"show","simplePast":"showed","pastParticiple":"shown"},{"german":"schliessen","infinitive":"shut","simplePast":"shut","pastParticiple":"shut"},{"german":"singen","infinitive":"sing","simplePast":"sang","pastParticiple":"sung"},{"german":"sinken","infinitive":"sink","simplePast":"sank","pastParticiple":"sunk"},{"german":"sitzen","infinitive":"sit","simplePast":"sat","pastParticiple":"sat"},{"german":"schlafen","infinitive":"sleep","simplePast":"slept","pastParticiple":"slept"},{"german":"gleiten, rutschen","infinitive":"slide","simplePast":"slid","pastParticiple":"slid"},{"german":"säen","infinitive":"sow","simplePast":"sowed","pastParticiple":"sown"},{"german":"sprechen","infinitive":"speak","simplePast":"spoke","pastParticiple":"spoken"},{"german":"rasen, flitzen","infinitive":"speed","simplePast":"sped","pastParticiple":"sped"},{"german":"ausgeben, verbringen","infinitive":"spend","simplePast":"spent","pastParticiple":"spent"},{"german":"drehen, rotieren","infinitive":"spin","simplePast":"spun","pastParticiple":"spun"},{"german":"spucken","infinitive":"spit","simplePast":"spat","pastParticiple":"spat"},{"german":"teilen","infinitive":"split","simplePast":"split","pastParticiple":"split"},{"german":"ausbreiten","infinitive":"spread","simplePast":"spread","pastParticiple":"spread"},{"german":"aufspringen","infinitive":"spring","simplePast":"sprang","pastParticiple":"sprung"},{"german":"stehen","infinitive":"stand","simplePast":"stood","pastParticiple":"stood"},{"german":"stehlen","infinitive":"steal","simplePast":"stole","pastParticiple":"stolen"},{"german":"kleben","infinitive":"stick","simplePast":"stuck","pastParticiple":"stuck"},{"german":"stechen","infinitive":"sting","simplePast":"stung","pastParticiple":"stung"},{"german":"stinken","infinitive":"stink","simplePast":"stank","pastParticiple":"stunk"},{"german":"schwören","infinitive":"swear","simplePast":"swore","pastParticiple":"sworn"},{"german":"schwören","infinitive":"swear","simplePast":"swore","pastParticiple":"sworn"},{"german":"kehren","infinitive":"sweep","simplePast":"swept","pastParticiple":"swept"},{"german":"anschwellen","infinitive":"swell","simplePast":"swelled","pastParticiple":"swollen"},{"german":"schwimmen","infinitive":"swim","simplePast":"swam","pastParticiple":"swum"},{"german":"schwingen","infinitive":"swing","simplePast":"swung","pastParticiple":"swung"},{"german":"nehmen","infinitive":"take","simplePast":"took","pastParticiple":"taken"},{"german":"lehren, unterrichten","infinitive":"teach","simplePast":"taught","pastParticiple":"taught"},{"german":"zerreissen","infinitive":"tear","simplePast":"tore","pastParticiple":"torn"},{"german":"erzählen","infinitive":"tell","simplePast":"told","pastParticiple":"told"},{"german":"denken","infinitive":"think","simplePast":"thought","pastParticiple":"thought"},{"german":"gedeihen","infinitive":"thrive","simplePast":"throve","pastParticiple":"thrived"},{"german":"werfen","infinitive":"throw","simplePast":"threw","pastParticiple":"thrown"},{"german":"verstehen","infinitive":"understand","simplePast":"understood","pastParticiple":"understood"},{"german":"wecken","infinitive":"wake","simplePast":"woke","pastParticiple":"woken"},{"german":"anhaben, tragen","infinitive":"wear","simplePast":"wore","pastParticiple":"worn"},{"german":"weben","infinitive":"weave","simplePast":"wove","pastParticiple":"woven"},{"german":"weinen","infinitive":"weep","simplePast":"wept","pastParticiple":"wept"},{"german":"befeuchten","infinitive":"wet","simplePast":"wet","pastParticiple":"wet"},{"german":"gewinnen","infinitive":"win","simplePast":"won","pastParticiple":"won"},{"german":"wickeln, spulen","infinitive":"wind","simplePast":"wound","pastParticiple":"wound"},{"german":"schreiben","infinitive":"write","simplePast":"wrote","pastParticiple":"written"}]');
                words = JSON.parse(localStorage.getItem('words'));
            }
        }
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

    const infinitiveSolution = infinitiveInput.getAttribute("dataSolution");
    const simplePastSolution = simplePastInput.getAttribute("dataSolution");
    const pastParticipleSolution = pastParticipleInput.getAttribute("dataSolution");

    const checkButton = document.getElementById("checkButton");
    const nextButton = document.getElementById("nextButton");

    if (doCorrect || infinitiveInput.value == infinitiveSolution && simplePastInput.value == simplePastSolution && pastParticipleInput.value == pastParticipleSolution) {
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
