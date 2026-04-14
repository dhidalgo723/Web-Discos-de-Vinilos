function togglePassword() {
    let password_input = document.getElementById('.password-input');
    let show_password = document.getElementById('.show-password');

    if (password_input.type === 'password') {
        password_input.type = 'text';
    } else {
        password_input.type = 'password';
    }
};

function validate() {
    let hasHigh = false;
    let hasNumber = false;
    let hasSpecial = false;

    for (let i = 0; i < password_input.value.length; i++) {
        let char = password_input.value[i];
        if (char >= 'A' && char <= 'Z') {
            hasHigh = true;
        } else if (char >= '0' && char <= '9') {
            hasNumber = true;
        } else if (char === 'ñ' || char === '!' || char === '@' || char === '#' || char === '$' || char === '%' || char === '&' || char === '*' || char === '(' || char === ')' || char === '-' || char === '_' || char === '+' || char === '=' || char === '[' || char === ']' || char === '{' || char === '}' || char === '|' || char === '\\' || char === ':' || char === ';' || char === '"' || char === '\'' || char === '<' || char === '>' || char === ',' || char === '.' || char === '?' || char === '/') {
            hasSpecial = true;
        }
    }

    if (hasHigh && hasNumber && hasSpecial) {
        alert("Password is valid!");
    } else {
        alert("Password isn't valid!");
    }

};
