var buttons = document.getElementsByClassName("button");

function copytoclipboard(text) {
    console.log(text)
    navigator.clipboard.writeText(text).then(
        value => {
            // fulfillment
            alert("copied to clipboard")
        }, reason => {
            // rejection
            alert("fail: " + reason)
        }
    )
}

for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].getAttribute("title") == "RSS") {
        var url = document.baseURI + "atom.xml"
        buttons[i].href = "javascript:;"
        buttons[i].target = "_self"
        buttons[i].setAttribute('onclick', "copytoclipboard(\"" + url + "\");")
    }
}

