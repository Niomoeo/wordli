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
        localStorage.setItem("words", '[{"german":"sein","infinitive":"be","simplePast":"was/were","pastParticiple":"been"},{"german":"etwas tragen","infinitive":"bear","simplePast":"bore","pastParticiple":"born"},{"german":"schlagen","infinitive":"beat","simplePast":"beat","pastParticiple":"beaten"},{"german":"biegen","infinitive":"bend","simplePast":"bent","pastParticiple":"bent"},{"german":"wetten","infinitive":"bet","simplePast":"bet","pastParticiple":"bet"},{"german":"bieten","infinitive":"bid","simplePast":"bid","pastParticiple":"bid"},{"german":"binden","infinitive":"bind","simplePast":"bound","pastParticiple":"bound"},{"german":"beissen","infinitive":"bite","simplePast":"bit","pastParticiple":"bitten"},{"german":"bluten","infinitive":"bleed","simplePast":"bled","pastParticiple":"bled"},{"german":"blasen","infinitive":"blow","simplePast":"blew","pastParticiple":"blown"},{"german":"zerbrechen","infinitive":"break","simplePast":"broke","pastParticiple":"broken"},{"german":"züchten","infinitive":"breed","simplePast":"bred","pastParticiple":"bred"},{"german":"(mit-)bringen","infinitive":"bring","simplePast":"brought","pastParticiple":"brought"},{"german":"übertragen, senden","infinitive":"broadcast","simplePast":"broadcast","pastParticiple":"broadcast"},{"german":"bauen","infinitive":"build","simplePast":"built","pastParticiple":"built"},{"german":"brennen","infinitive":"burn","simplePast":"burnt","pastParticiple":"burnt"},{"german":"kaufen","infinitive":"buy","simplePast":"bought","pastParticiple":"bought"},{"german":"werfen (Schatten)","infinitive":"cast","simplePast":"cast","pastParticiple":"cast"},{"german":"fangen","infinitive":"catch","simplePast":"caught","pastParticiple":"caught"},{"german":"(aus-)wählen","infinitive":"choose","simplePast":"chose","pastParticiple":"chosen"},{"german":"kommen","infinitive":"come","simplePast":"came","pastParticiple":"come"},{"german":"kosten","infinitive":"cost","simplePast":"cost","pastParticiple":"cost"},{"german":"kriechen","infinitive":"creep","simplePast":"crept","pastParticiple":"crept"},{"german":"(aus)schneiden","infinitive":"cut","simplePast":"cut","pastParticiple":"cut"},{"german":"verhandeln","infinitive":"deal","simplePast":"dealt","pastParticiple":"dealt"},{"german":"graben","infinitive":"dig","simplePast":"dug","pastParticiple":"dug"},{"german":"tauchen","infinitive":"dive","simplePast":"dove","pastParticiple":"dived"},{"german":"tun, machen","infinitive":"do","simplePast":"did","pastParticiple":"done"},{"german":"zeichnen","infinitive":"draw","simplePast":"drew","pastParticiple":"drawn"},{"german":"zeichnen","infinitive":"draw","simplePast":"drew","pastParticiple":"drawn"},{"german":"träumen","infinitive":"dream","simplePast":"dreamt","pastParticiple":"dreamt"},{"german":"trinken","infinitive":"drink","simplePast":"drank","pastParticiple":"drunk"},{"german":"(ein Auto) fahren","infinitive":"drive","simplePast":"drove","pastParticiple":"driven"},{"german":"essen","infinitive":"eat","simplePast":"ate","pastParticiple":"eaten"},{"german":"(hin-)fallen","infinitive":"fall","simplePast":"fell","pastParticiple":"fallen"},{"german":"füttern","infinitive":"feed","simplePast":"fed","pastParticiple":"fed"},{"german":"(sich) fühlen","infinitive":"feel","simplePast":"felt","pastParticiple":"felt"},{"german":"kämpfen","infinitive":"fight","simplePast":"fought","pastParticiple":"fought"},{"german":"finden","infinitive":"find","simplePast":"found","pastParticiple":"found"},{"german":"fliegen","infinitive":"fly","simplePast":"flew","pastParticiple":"flown"},{"german":"verbieten","infinitive":"forbid","simplePast":"forbade","pastParticiple":"forbidden"},{"german":"vergessen","infinitive":"forget","simplePast":"forgot","pastParticiple":"forgotten"},{"german":"vergessen","infinitive":"forget","simplePast":"forgot","pastParticiple":"forgotten"},{"german":"frieren","infinitive":"freeze","simplePast":"froze","pastParticiple":"frozen"},{"german":"kriegen, holen","infinitive":"get","simplePast":"got","pastParticiple":"got"},{"german":"geben","infinitive":"give","simplePast":"gave","pastParticiple":"given"},{"german":"gehen","infinitive":"go","simplePast":"went","pastParticiple":"gone"},{"german":"wachsen","infinitive":"grow","simplePast":"grew","pastParticiple":"grown"},{"german":"(auf-)hängen","infinitive":"hang","simplePast":"hung","pastParticiple":"hung"},{"german":"haben","infinitive":"have","simplePast":"had","pastParticiple":"had"},{"german":"hören","infinitive":"hear","simplePast":"heard","pastParticiple":"heard"},{"german":"verstecken","infinitive":"hide","simplePast":"hid","pastParticiple":"hidden"},{"german":"schlagen, treffen","infinitive":"hit","simplePast":"hid","pastParticiple":"hidden"},{"german":"halten","infinitive":"hold","simplePast":"held","pastParticiple":"held"},{"german":"verletzen","infinitive":"hurt","simplePast":"hurt","pastParticiple":"hurt"},{"german":"behalten","infinitive":"keep","simplePast":"kept","pastParticiple":"kept"},{"german":"wissen, kennen","infinitive":"know","simplePast":"knew","pastParticiple":"known"},{"german":"legen","infinitive":"lay","simplePast":"laid","pastParticiple":"laid"},{"german":"führen, leiten","infinitive":"lead","simplePast":"led","pastParticiple":"led"},{"german":"lernen","infinitive":"learn","simplePast":"learnt","pastParticiple":"learnt"},{"german":"weggehen","infinitive":"leave","simplePast":"left","pastParticiple":"left"},{"german":"verleihen","infinitive":"lend","simplePast":"lent","pastParticiple":"lent"},{"german":"lassen","infinitive":"let","simplePast":"let","pastParticiple":"let"},{"german":"liegen","infinitive":"lie","simplePast":"lay","pastParticiple":"lein"},{"german":"anzünden","infinitive":"light","simplePast":"lit","pastParticiple":"lit"},{"german":"verlieren","infinitive":"lose","simplePast":"lost","pastParticiple":"lost"},{"german":"herstellen, machen","infinitive":"make","simplePast":"made","pastParticiple":"made"},{"german":"bedeuten","infinitive":"mean","simplePast":"meant","pastParticiple":"meant"},{"german":"(sich) treffen","infinitive":"meet","simplePast":"met","pastParticiple":"met"},{"german":"überholen","infinitive":"overtake","simplePast":"overtook","pastParticiple":"overtaken"},{"german":"bezahlen","infinitive":"pay","simplePast":"paid","pastParticiple":"paid"},{"german":"beweisen","infinitive":"prove","simplePast":"proved","pastParticiple":"proven"},{"german":"stellen, legen","infinitive":"put","simplePast":"put","pastParticiple":"put"},{"german":"aufhören","infinitive":"quit","simplePast":"quit","pastParticiple":"quit"},{"german":"lesen","infinitive":"read","simplePast":"read","pastParticiple":"read"},{"german":"(von etwas) befreien","infinitive":"rid","simplePast":"rid","pastParticiple":"rid"},{"german":"reiten, fahren","infinitive":"ride","simplePast":"rode","pastParticiple":"ridden"},{"german":"klingeln","infinitive":"ring","simplePast":"rang","pastParticiple":"rung"},{"german":"aufgehen","infinitive":"rise","simplePast":"rose","pastParticiple":"risen"},{"german":"rennen","infinitive":"run","simplePast":"ran","pastParticiple":"run"},{"german":"sägen","infinitive":"saw","simplePast":"sawed","pastParticiple":"sawn"},{"german":"sagen","infinitive":"say","simplePast":"said","pastParticiple":"said"},{"german":"sehen","infinitive":"see","simplePast":"saw","pastParticiple":"seen"},{"german":"suchen","infinitive":"seek","simplePast":"sought","pastParticiple":"sought"},{"german":"verkaufen","infinitive":"sell","simplePast":"sold","pastParticiple":"sold"},{"german":"senden, schicken","infinitive":"send","simplePast":"sent","pastParticiple":"sent"},{"german":"setzen, stellen","infinitive":"set","simplePast":"set","pastParticiple":"set"},{"german":"schütteln","infinitive":"shake","simplePast":"shook","pastParticiple":"shaken"},{"german":"scheinen","infinitive":"shine","simplePast":"shone","pastParticiple":"shone"},{"german":"schiessen","infinitive":"shoot","simplePast":"shot","pastParticiple":"shot"},{"german":"zeigen","infinitive":"show","simplePast":"showed","pastParticiple":"shown"},{"german":"schliessen","infinitive":"shut","simplePast":"shut","pastParticiple":"shut"},{"german":"singen","infinitive":"sing","simplePast":"sang","pastParticiple":"sung"},{"german":"sinken","infinitive":"sink","simplePast":"sank","pastParticiple":"sunk"},{"german":"sitzen","infinitive":"sit","simplePast":"sat","pastParticiple":"sat"},{"german":"schlafen","infinitive":"sleep","simplePast":"slept","pastParticiple":"slept"},{"german":"gleiten, rutschen","infinitive":"slide","simplePast":"slid","pastParticiple":"slid"},{"german":"säen","infinitive":"sow","simplePast":"sowed","pastParticiple":"sown"},{"german":"sprechen","infinitive":"speak","simplePast":"spoke","pastParticiple":"spoken"},{"german":"rasen, flitzen","infinitive":"speed","simplePast":"sped","pastParticiple":"sped"},{"german":"ausgeben, verbringen","infinitive":"spend","simplePast":"spent","pastParticiple":"spent"},{"german":"drehen, rotieren","infinitive":"spin","simplePast":"spun","pastParticiple":"spun"},{"german":"spucken","infinitive":"spit","simplePast":"spat","pastParticiple":"spat"},{"german":"teilen","infinitive":"split","simplePast":"split","pastParticiple":"split"},{"german":"ausbreiten","infinitive":"spread","simplePast":"spread","pastParticiple":"spread"},{"german":"aufspringen","infinitive":"spring","simplePast":"sprang","pastParticiple":"sprung"},{"german":"stehen","infinitive":"stand","simplePast":"stood","pastParticiple":"stood"},{"german":"stehlen","infinitive":"steal","simplePast":"stole","pastParticiple":"stolen"},{"german":"kleben","infinitive":"stick","simplePast":"stuck","pastParticiple":"stuck"},{"german":"stechen","infinitive":"sting","simplePast":"stung","pastParticiple":"stung"},{"german":"stinken","infinitive":"stink","simplePast":"stank","pastParticiple":"stunk"},{"german":"schwören","infinitive":"swear","simplePast":"swore","pastParticiple":"sworn"},{"german":"schwören","infinitive":"swear","simplePast":"swore","pastParticiple":"sworn"},{"german":"kehren","infinitive":"sweep","simplePast":"swept","pastParticiple":"swept"},{"german":"anschwellen","infinitive":"swell","simplePast":"swelled","pastParticiple":"swollen"},{"german":"schwimmen","infinitive":"swim","simplePast":"swam","pastParticiple":"swum"},{"german":"schwingen","infinitive":"swing","simplePast":"swung","pastParticiple":"swung"},{"german":"nehmen","infinitive":"take","simplePast":"took","pastParticiple":"taken"},{"german":"lehren, unterrichten","infinitive":"teach","simplePast":"taught","pastParticiple":"taught"},{"german":"zerreissen","infinitive":"tear","simplePast":"tore","pastParticiple":"torn"},{"german":"erzählen","infinitive":"tell","simplePast":"told","pastParticiple":"told"},{"german":"denken","infinitive":"think","simplePast":"thought","pastParticiple":"thought"},{"german":"gedeihen","infinitive":"thrive","simplePast":"throve","pastParticiple":"thrived"},{"german":"werfen","infinitive":"throw","simplePast":"threw","pastParticiple":"thrown"},{"german":"verstehen","infinitive":"understand","simplePast":"understood","pastParticiple":"understood"},{"german":"wecken","infinitive":"wake","simplePast":"woke","pastParticiple":"woken"},{"german":"anhaben, tragen","infinitive":"wear","simplePast":"wore","pastParticiple":"worn"},{"german":"weben","infinitive":"weave","simplePast":"wove","pastParticiple":"woven"},{"german":"weinen","infinitive":"weep","simplePast":"wept","pastParticiple":"wept"},{"german":"befeuchten","infinitive":"wet","simplePast":"wet","pastParticiple":"wet"},{"german":"gewinnen","infinitive":"win","simplePast":"won","pastParticiple":"won"},{"german":"wickeln, spulen","infinitive":"wind","simplePast":"wound","pastParticiple":"wound"},{"german":"schreiben","infinitive":"write","simplePast":"wrote","pastParticiple":"written"}]');
        words = JSON.parse(localStorage.getItem('words'));
        reloadReveal(words);
    }
}

document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addWord();
    }
});
