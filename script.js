const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phoneNumber');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    validateInputs();
});

const setError = (element, massage) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = massage;
    inputControl.classList.add('error');
};

const validateInputs = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();

    if (nameValue === '' || emailValue === '' || phoneValue === '') {
        setError('this field is required');
    }else {
        document.getElementById('submit').onclick = function (){
            window.location.href = 'step2.html';
        }
    }
};