
export const validateFormLogIn = (form)=>{
    const {email, password} = form
    const formErrors = {}
    const stateErr = {}
    const validateEmail = isValidEmail(email);
    const validatePassword = isValidatePassword(password)
    if(!!validateEmail) {
        stateErr["email"] = false;
        formErrors["email"] = validateEmail;
    }else {
        stateErr["email"] = true;
    }

    if(!!validatePassword) {
        stateErr["password"] = false;
        formErrors["password"] = validatePassword;
    }else {
        stateErr["password"] = true;
    }
    return {formErrors, stateErr}
}

export const errorsForm = (massage)=>{
    const formErrors = {}
    const stateErr = {}
    switch (massage){
        case 'Пользователь с таким email не найден':
            stateErr["email"] = false;
            formErrors["email"] = massage;
            break;
        case 'Неверный пароль':
            stateErr["password"] = false;
            formErrors["password"] = massage;
            break;
        case 'Превышен лемит подключений':
            stateErr["limited"] = false;
            formErrors["limited"] = massage;
            stateErr["password"] = false;
            formErrors["password"] = massage;
    }
    return {formErrors, stateErr}
}

export const validateFormSignUp = (form) => {
    const formErrors = {}
    const stateErr = {}
    const validateUserName = isValidateUserName(form.userName);
    const validateEmail = isValidEmail(form.email);
    const validatePassword = isValidatePassword(form.password);
    const validateConfirmPassword = isValidateConfirmPassword(form.password, form.confirmPassword);
    const validateAgreement = isValidateAgreement(form.agreement);

    if(!!validateUserName){
        stateErr["userName"] = false;
        formErrors["userName"] = validateUserName;
    }else {
        stateErr["userName"] = true;
    }

    if(!!validateEmail) {
        stateErr["email"] = false;
        formErrors["email"] = validateEmail;
    }else {
        stateErr["email"] = true;
    }

    if(!!validatePassword) {
        stateErr["password"] = false;
        formErrors["password"] = validatePassword;
    }else {
        stateErr["password"] = true;
    }

    if(!!validateConfirmPassword) {
        stateErr["confirmPassword"] = false;
        formErrors["confirmPassword"] = validateConfirmPassword;
    }else {
        stateErr["confirmPassword"] = true;
    }

    if(!!validateAgreement) {
        stateErr["agreement"] = false;
        formErrors["agreement"] = validateAgreement;
    }else {
        stateErr["agreement"] = true;
    }

    return {formErrors, stateErr}
}


function isValidateUserName(userName){
    if(!userName || userName === '') return "Пожалуйста укажите свой user name"
    else if(userName.length > 20) return "Слишком длинный user name максимальная длина 20 символов"
    else if(userName.length < 2) return "Слишком короткий user name минимальная длина 2 символа"
}
function isValidEmail(email) {
    if(!email || email === '') return "Пожалуйста укажите email"
    else if(email.length > 40) return "Слишком длинный email максимальная длина 40 символов"
    else if(!(/\S+@\S+\.\S+/.test(email))) return "Email введен не корректно"
    else if(email[0] === "@") return "Email не может начинаться с <@>"
}

function isValidatePassword(password){
    if(!password || password === '') return "Пожалуйста укажите свой пароль"
    else if(password.length > 20) return "Слишком длинный пароль максимальная длина 20 символов"
    else if(password.length < 6) return "Слишком ороткий пароль минимальная длина 6 символов"
}

function isValidateConfirmPassword(password, confirmPassword){
    if(password!==confirmPassword || confirmPassword==='') return "Пароли не совпадают"
}

function isValidateAgreement(agreement){
    if(!agreement) return "Для завершения регистрации необходимо принять соглашение"
}


