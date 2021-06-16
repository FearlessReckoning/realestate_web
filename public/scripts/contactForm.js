let firstForm = document.getElementById("firstForm");
let firstFormSend = document.getElementById("firstFormSend");

let secondForm = document.getElementById("secondForm");
let secondFormSend = document.getElementById("secondFormSend");

let thirdForm = document.getElementById("thirdForm");

firstFormSend.addEventListener("click", (e) => {
        firstForm.style.top = "20px";
        firstForm.style.display = "none";
        secondForm.style.display = "block";
});

secondFormSend.addEventListener("click", (e) => {
    secondForm.style.display = "none";
    thirdForm.style.display = "flex";
    thirdForm.style.flexDirection = "column"
});