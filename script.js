const maleNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
];

const femaleNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
];

const form = document.getElementById("akanForm");
const clear = document.getElementById("clear");
const resultDiv = document.getElementById("display");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    readData();
});


