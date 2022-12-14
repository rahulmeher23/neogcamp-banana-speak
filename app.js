var btnTranslate = document.querySelector(`#translate-button`);
var txtInput = document.querySelector(`#text-input`);
var txtOutput = document.querySelector(`#output`);

var serverURL = `https://api.funtranslations.com/translate/minion.json`;
var  currentURL;
function translationURL(text) {
    return currentURL = serverURL + `?` + `text=` + text; 
}

function errorHandler(error) {
    console.log(`Error has occured!`, error);
    alert(`Something's wrong with server. Try again later!`);
}

function clickHandler() {
    var inputText = txtInput.value;

    fetch(translationURL(inputText)) 
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            txtOutput.innerText = translatedText;
        })

    .catch(errorHandler);
};

btnTranslate.addEventListener(`click`, clickHandler)



