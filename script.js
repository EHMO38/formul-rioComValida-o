const form = document.getElementById('form')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#password-confirmation');

form.addEventListener('submit', (event) => {
    event.preventDefault();

   checkForm();
})

username.addEventListener('blur', () => {
    checkInputUsername();
});
email.addEventListener('blur', () => {
    checkInputEmail();
});
password.addEventListener('blur', () => {
    checkInputPassword();
});
passwordConfirmation.addEventListener('blur', () => {
    checkInputPasswordConfirmation();
});

function checkInputUsername() {
    const usernameValue = username.value;

    if(usernameValue === ''){
        errorInput(username, 'Usuário obrigatório!');
    }else{
        const formItem = username.parentElement;
        formItem.className = 'form-content';
    }
}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ''){
        errorInput(email, 'O email é obrigatório!')
    }else{
        const formItem = email.parentElement;
        formItem.className = 'form-content';
    }
}

function checkInputPassword(){
    const passwordValue = password.value;

    if(passwordValue === ''){
        errorInput(password, 'A senha é obrigatória!')
    }else if(passwordValue.length < 8){
        errorInput(password, 'A senha precisa ter no mínimo 8 caracteres!')
    }else{
        const formItem = password.parentElement;
        formItem.className = 'form-content';
    }
}

function checkInputPasswordConfirmation(){
    const passwordValue = password.value;
    passwordConfirmationValue = passwordConfirmation.value;

    if(passwordConfirmationValue === ''){
        errorInput(passwordConfirmation, 'A confirmação da senha é obrigatória!')
    }else if(passwordConfirmationValue < 8){
        errorInput(passwordConfirmation, 'A senha precisa ter no mínimo 8 caracteres!')
    }else if(passwordConfirmationValue === passwordValue){
        const formItem = passwordConfirmation.parentElement;
        formItem.className = 'form-content';
    }else{
        errorInput(passwordConfirmation, 'Confirmação inválida!')
    }
}

function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll('.form-content');
    const isValid = [...formItems].every((item) => {
        return item.className === 'form-content'
    });

    if(isValid){
        alert('CADASTRADO COM SUCESSO!')
    }
}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;

    formItem.className = 'form-content error'
}