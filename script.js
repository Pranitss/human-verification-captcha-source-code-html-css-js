let captchaText = document.getElementById('captchaText');
let errorMessage = document.getElementById('errorMessage');

function generateCaptcha() {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 5; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    captchaText.textContent = captcha;
    errorMessage.textContent = '';
}

function validateCaptcha() {
    let input = document.getElementById('captchaInput').value;
    if (input === captchaText.textContent) {
        errorMessage.style.color = 'green';
        errorMessage.textContent = 'Captcha verified successfully!';
    } else {
        errorMessage.style.color = 'red';
        errorMessage.textContent = 'Enter the captcha first!';
    }
}

window.onload = generateCaptcha;
