var onbtnclick = document.querySelector("#btn"); // button click
var iptText = document.querySelector("#primaryMessage");
var optText = document.querySelector("#output-banana")
var apiurl = "https://api.funtranslations.com/translate/minion.json?text="


function getTranslation(input){
    var input_r = input + iptText.value;
    return input_r;
}

function clickHandler(){
    fetch(getTranslation(apiurl)).then(Response => Response.json()).then(json => {
        var translateText = json.contents.translated;
        optText.innerText = translateText;
    })

}

onbtnclick.addEventListener("click", clickHandler);

