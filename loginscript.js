document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const passwordInput = document.getElementById('passwordInput');
    const validateButton = document.getElementById('validateButton');
    const emailInput = document.getElementById('emailInput');
    const removeSesion = document.getElementById('removeSesion');

    function validatePassword(password) {
        let hasUpperCase = false;
        let hasLowerCase = false;
        let hasNumber = false;

        if (password.length < 6 || password.length > 12) {
            return {
                valid: false,
                message: 'Debe tener entre 6 y 12 caracteres'
            };
        }

        for (let i = 0; i < password.length; i++) {
            const char = password[i];
            
            if (char >= 'A' && char <= 'Z') {
                hasUpperCase = true;
            } else if (char >= 'a' && char <= 'z') {
                hasLowerCase = true;
            } else if (char >= '0' && char <= '9') {
                hasNumber = true;
            }
        }

        if (!hasUpperCase) {
            return {
                valid: false,
                message: 'Debe contener al menos una letra Mayúscula'
            };
        } else if (!hasLowerCase) {
            return {
                valid: false,
                message: 'Debe contener al menos una letra minúscula'
            };
        } else if (!hasNumber) {
            return {
                valid: false,
                message: 'Debe contener al menos un número'
            };
        }
        return {
            valid: true,
            message: 'Contraseña válida'
        };
    }

    validateButton.addEventListener('click', (e) => {
        e.preventDefault();
        
        // CORRECCIÓN: Obtener el VALOR del input, no el elemento
        const password = passwordInput.value.trim();
        
        if (!password) {
            alert('Ingresa una contraseña');
            passwordInput.focus();
            return;
        }

        const validation = validatePassword(password);
        alert(validation.message);
        
        if (validation.valid) {
            passwordInput.style.borderColor = '#00ff88';
            passwordInput.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.5)';
        } else {
            passwordInput.style.borderColor = '#e74c3c';
            passwordInput.style.animation = 'shake 0.5s';
            
            setTimeout(() => {
                passwordInput.style.animation = '';
                passwordInput.style.borderColor = 'rgba(155, 89, 182, 0.4)';
                passwordInput.style.boxShadow = 'none';
            }, 500);
        }
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        sessionStorage.setItem('usuario', email);
        sessionStorage.setItem('password', password);
        
        const passwordValidation = validatePassword(password);

        if (!passwordValidation.valid) {
            alert(passwordValidation.message);
            passwordInput.style.borderColor = '#e74c3c';
            passwordInput.style.animation = 'shake 0.5s';
            passwordInput.focus();
            
            setTimeout(() => {
                passwordInput.style.animation = '';
                passwordInput.style.borderColor = 'rgba(155, 89, 182, 0.4)';
            }, 500);
            return;
        }

        alert("Has entrado como: " + sessionStorage.getItem('usuario', email));
        
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 1000);
    });

    passwordInput.addEventListener('input', () => {
        passwordInput.style.borderColor = 'rgba(155, 89, 182, 0.4)';
        passwordInput.style.boxShadow = 'none';
    });
});