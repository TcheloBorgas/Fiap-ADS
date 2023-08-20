const pwEL = document.getElementById('pw');
const copyEL = document.getElementById('copy');
const lenEL = document.getElementById('length');

const upEL = document.getElementById('uppercase');
const lwEL = document.getElementById('lowercase');
const numEL = document.getElementById('numbers');
const symEL = document.getElementById('symbols');
const generateEL = document.getElementById('generate');

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=|";

function randomString() {
    let len = lenEL.value;
    let password = '';
    if (upEL.checked) {
        password += upperLetters;
    }
    if (lwEL.checked) {
        password += lowerLetters;
    }
    if (numEL.checked) {
        password += numbers;
    }
    if (symEL.checked) {
        password += symbols;
    }
    pwEL.value = generatePassword(len, password);
}

function generatePassword(length, chars) {
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

copyEL.addEventListener('click', function() {
    pwEL.select(); // select the content of the input
    document.execCommand('copy'); // copy the selected content
    alert('Contraseña copiada al portapapeles!');
});

generateEL.addEventListener('click', randomString);
