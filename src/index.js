const form = document.getElementById("form");
const fields = document.querySelectorAll(".field");
const errorMessages = document.querySelectorAll(".message");

fields.forEach((currentField, index) => {
    currentField.addEventListener("blur", () => {
        if (currentField.value.length === 0) {
            currentField.classList.remove("validated")
            showErrorMessage(currentField, index)
        } else {
            hideErrorMessage(currentField, index)
            currentField.classList.add("validated");
        }
    })
})

form.addEventListener("submit", (event) => {
    fields.forEach((currentField, index) => {
        if (currentField.value.length === 0) {
            showErrorMessage(currentField, index)
            event.preventDefault()
        } else {
            hideErrorMessage(currentField, index);
        }
    })
})

function showErrorMessage(currentField, index) {
    currentField.classList.add("error");
    errorMessages[index].classList.add("error");
}

function hideErrorMessage(currentField, index) {
    currentField.classList.remove("error");
    errorMessages[index].classList.remove("error");
}