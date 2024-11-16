
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var newalphabet = "";

// Create a shifted alphabet
function createShift(n) {
    for (let i = 0; i < alphabet.length; i++) {
        let offset = (i + n) % alphabet.length;
        newalphabet += alphabet[offset];
    }
}

// Encode the message
function encode() {
    let message = document.getElementById('txtMessage').value;
    let result = "";
    message = message.toLowerCase();
    for (let i = 0; i < message.length; i++) {
        let index = alphabet.indexOf(message[i]);
        if (index > -1)
            result += newalphabet[index];
        else
            result += ' ';
    }
    document.getElementById('cipher').innerHTML = result;
    return result;
}

// Decode the message
function decode() {
    let encodedMessage = document.getElementById('txtMessage').value;
    let result = "";
    encodedMessage = encodedMessage.toLowerCase();
    for (let i = 0; i < encodedMessage.length; i++) {
        let index = newalphabet.indexOf(encodedMessage[i]);
        if (index > -1)
            result += alphabet[index];
        else
            result += ' ';
    }
    document.getElementById('cipher').innerHTML = result;
    return result;
}

// Initialize on page load
window.addEventListener('load', function () {
    createShift(1); // Set shift value here
});
