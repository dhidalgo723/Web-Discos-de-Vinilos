const email_input = document.querySelectorAll('.email-input');
const show_password = document.querySelectorAll('.show-password');

show-password.addEventListener('click', function() {
    // Verificamos el tipo actual del input
    if (email_input.type === 'password') {
        // Si está oculto, lo mostramos
        email_input.type = 'text';
        // Opcional: podrías cambiar la opacidad para dar feedback visual
        this.style.filter = 'brightness(1.5) drop-shadow(0 0 5px #bc13fe)';
    } else {
        // Si ya es visible, lo volvemos a ocultar
        email_input.type = 'password';
        // Volvemos al estilo original
        this.style.filter = 'none';
    }
});