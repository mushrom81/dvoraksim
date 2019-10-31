var typingBox = document.getElementById("typingBox");
var outputBox = document.getElementById("outputBox");

var translateHash = {
    "-":"[",
    "_":"{",
    "=":"]",
    "+":"}",
    "q":"'",
    "Q":"\"",
    "w":",",
    "W":"<",
    "e":".",
    "E":">",
    "r":"p",
    "R":"P",
    "t":"y",
    "T":"Y",
    "y":"f",
    "Y":"F",
    "u":"g",
    "U":"G",
    "i":"c",
    "I":"C",
    "o":"r",
    "O":"R",
    "p":"l",
    "P":"L",
    "[":"/",
    "{":"?",
    "]":"=",
    "}":"+",
    "s":"o",
    "S":"O",
    "d":"e",
    "D":"E",
    "f":"u",
    "F":"U",
    "g":"i",
    "G":"I",
    "h":"d",
    "H":"D",
    "j":"h",
    "J":"H",
    "k":"t",
    "K":"T",
    "l":"n",
    "L":"N",
    ";":"s",
    ":":"S",
    "'":"-",
    "\"":"_",
    "z":";",
    "Z":":",
    "x":"q",
    "X":"Q",
    "c":"j",
    "C":"J",
    "v":"k",
    "V":"K",
    "b":"x",
    "B":"X",
    "n":"b",
    "N":"B",
    ",":"w",
    "<":"W",
    ".":"v",
    ">":"V",
    "/":"z",
    "?":"Z"
}

function translate(typedChars) {
    charArray = typedChars.split("");
    for (var i = 0; i < charArray.length; i++) {
        if (charArray[i] in translateHash) charArray[i] = translateHash[charArray[i]];
    }
    return charArray.join("");
}

function loop() {
    requestAnimationFrame(loop);
    if (typingBox === document.activeElement) {
        typingBox.style.width = "0px";
        typingBox.style.height = "0px";
        outputBox.style.display = "inline";
    }
    else {
        typingBox.style.width = "99%";
        typingBox.style.height = "50px";
        typingBox.value = ""
        outputBox.style.display = "none";
    }
    if (typingBox.value.length > 23) typingBox.value = typingBox.value.substr(typingBox.value.length - 23);
    outputBox.value = translate(typingBox.value) + "█";
}
loop();