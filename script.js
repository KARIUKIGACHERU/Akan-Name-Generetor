
const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
];
 
const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
];
 
// get HTML elements
const form = document.getElementById("akanForm");
const clear = document.getElementById("clear");
const resultDiv = document.getElementById("display");
 
// submit event
form.addEventListener("submit", function (event) {
 
    event.preventDefault();
 
    readData();
 
});
 
// clear button
clear.addEventListener("click", function () {
 
    resultDiv.innerHTML = "";
    resultDiv.style.display = "none";
 
});
 
// read form data
function readData() {
 
    const day = Number(document.getElementById("dd").value);
    const month = Number(document.getElementById("mm").value);
    const year = Number(document.getElementById("yy").value);
 
    const male = document.getElementById("male").checked;
    const female = document.getElementById("female").checked;
 
    // validation
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
 
    // calculate day of Week
    const birthday = new Date(year, month - 1, day);
 
    const dayIndex = birthday.getDay();
 
    let akanName = "";
 
    if (male) {
 
        akanName = maleNames[dayIndex];
 
    } else {
 
        akanName = femaleNames[dayIndex];
 
    }
 
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
 
    //  will display Result
    resultDiv.style.display = "block";
 
    resultDiv.innerHTML = `
        <p class="resultParagraph">
            You were born on <strong>${days[dayIndex]}</strong>.<br><br>
            Your Akan name is <strong>${akanName}</strong>.
        </p>
    `;
 
}