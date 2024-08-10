function validForm() {
    let isValid = true;

    const nameInput = document.getElementById("name");
    const nameGroupInput = document.getElementById("nameGroup");
    if (nameInput.value === "") {
        nameGroupInput.classList.add("error");
        isValid = false;
    } else {
        nameGroupInput.classList.remove("error");
    }

    const emailInput = document.getElementById("email");
    const emailGroupInput = document.getElementById("emailGroup");
    if (emailInput.value === "") {
        emailGroupInput.classList.add("error");
        isValid = false;
    } else {
        emailGroupInput.classList.remove("error");
    }

    const phoneInput = document.getElementById("phoneNumber");
    const phoneGroupInput = document.getElementById("phoneNumberGroupGroup");
    if (phoneInput.value === "") {
        phoneGroupInput.classList.add("error");
        isValid = false;
    } else {
        phoneGroupInput.classList.remove("error");
    }

    return isValid;
}