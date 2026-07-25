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


clear.addEventListener("click", function () {
    resultDiv.innerHTML = "";
    resultDiv.style.display = "none";
});

function readData() {

    const day = Number(document.getElementById("dd").value);
    const month = Number(document.getElementById("mm").value);
    const year = Number(document.getElementById("yy").value);

    const male = document.getElementById("male").checked;
    const female = document.getElementById("female").checked;

}

if (day < 1 || day > 31) {
        alert("Please enter a valid day.");
        return;
    }

    if (month < 1 || month > 12) {
        alert("Please enter a valid month.");
        return;
    }

    if (!male && !female) {
        alert("Please select a gender.");
        return;
    }