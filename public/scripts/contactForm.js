document.getElementById("formName").addEventListener("click", (e)=> {
    e.currentTarget.style.display ="none";
    formNumber.style.display = "flex"
});
document.getElementById("formNumber").addEventListener("click", (e) => {
    e.currentTarget.style.display ="none";
    formEmail.style.display = "flex";
});
document.getElementById("formEmail").addEventListener("click", (e) => {
    e.currentTarget.style.display = "none";
    formReason.style.display = "flex";
});
document.getElementById("formReason").addEventListener("click", (e) => {
    e.currentTarget.style.display="none";
    formHow.style.display = "flex";
});
document.getElementById("formHow").addEventListener("click", (e) => {
    e.currentTarget.style.display = "none";
});

