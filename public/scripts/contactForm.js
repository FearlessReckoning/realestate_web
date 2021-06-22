let firstFormButton = document.getElementById("firstFormButton");
let secondFormButton = document.getElementById("secondFormButton");

let firstFormWrapper = document.getElementById("firstFormWrapper");
let secondFormWrapper = document.getElementById("secondFormWrapper");
let thirdFormWrapper =document.getElementById("thirdFormWrapper");

firstFormButton.addEventListener("click", () => {
    firstFormWrapper.style.display = "none";
    secondFormWrapper.style.display = "flex";
});

secondFormButton.addEventListener("click", () => {
    secondFormWrapper.style.display = "none";
    thirdFormWrapper.style.display = "flex";
})