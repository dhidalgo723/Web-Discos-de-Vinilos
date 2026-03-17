// Animación de entrada suave
document.addEventListener('DOMContentLoaded', () => {
    const notifyBtn = document.querySelector('.notify-btn');
    const emailInput = document.querySelector('.email-input');
    
    notifyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();
        
        if (email && validateEmail(email)) {
            // Animación de éxito
            notifyBtn.textContent = '¡Redirigiendo!';
            notifyBtn.style.background = 'var(--accent-secondary)';
            notifyBtn.style.color = 'var(--bg-dark)';
            notifyBtn.style.borderColor = 'var(--accent-secondary)';
            
            // Redireccionar a rap.html después de 1 segundo
            setTimeout(() => {
                window.location.href = 'rap.html';
            }, 1000);
        } else {
            // Animación de error
            emailInput.style.borderColor = 'var(--accent-primary)';
            emailInput.style.animation = 'shake 0.5s';
            
            setTimeout(() => {
                emailInput.style.borderColor = 'rgba(155, 89, 182, 0.4)';
                emailInput.style.animation = '';
            }, 500);
        }
    });
    
    // Validar email al presionar Enter
    emailInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            notifyBtn.click();
        }
    });
});

// Función de validación de email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}