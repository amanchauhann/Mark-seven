var BTNtranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#input-txt");
var txtoutput = document.querySelector("#output-txt");

var serverURL = "https://api.funtranslations.com/translate/pirate.json"

function getURL(text){
    return serverURL + "?" + "text=" + text
}

function clickhandler() {
    var TXTinput = TXTinput.value

    fetch(getURL(TXTinput))
        .then(response => response.json())
        .then(json => {
           var translatedText = json.contents.translated;
           txtoutput.innerText = translatedText;
        })

    // fetch(getURL(TXTinput))
    //  .then(response => response.json);
    //  .then(json => 
    //     var translatedtxt = json.contents.translated
    //     console.log(translatedtxt))
    
};

BTNtranslate.addEventListener("click", clickhandler)