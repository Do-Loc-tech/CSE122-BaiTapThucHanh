const form = document.getElementById('register-form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group success';
    const messageDiv = formGroup.querySelector('.message');
    messageDiv.innerText = '✓ Hợp lệ';
}

function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group error';
    const messageDiv = formGroup.querySelector('.message');
    messageDiv.innerText = `✗ ${message}`;
}

function checkFullname() {
    if (fullname.value.trim() === '') {
        showError(fullname, 'Họ tên không được để trống');
        return false;
    }
    showSuccess(fullname);
    return true;
}

function checkEmail() {
    const emailValue = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+\$/;
    
    if (emailValue === '') {
        showError(email, 'Email không được để trống');
        return false;
    }
    if (!emailValue.includes('@')) {
        showError(email, 'Email không hợp lệ (thiếu ký tự @)');
        return false;
    }
    if (!emailRegex.test(emailValue)) {
        showError(email, 'Email không hợp lệ (thiếu tên miền)');
        return false;
    }
    showSuccess(email);
    return true;
}

function checkPassword() {
    const passValue = password.value;
    if (passValue.length < 6) {
        showError(password, 'Mật khẩu phải có ít nhất 6 ký tự');
        return false;
    }
    showSuccess(password);
    return true;
}

function checkConfirmPassword() {
    const confirmValue = confirmPassword.value;
    if (confirmValue === '') {
        showError(confirmPassword, 'Vui lòng xác nhận lại mật khẩu');
        return false;
    }
    if (confirmValue !== password.value) {
        showError(confirmPassword, 'Mật khẩu xác nhận không khớp');
        return false;
    }
    showSuccess(confirmPassword);
    return true;
}

fullname.addEventListener('input', checkFullname);
email.addEventListener('input', checkEmail);
password.addEventListener('input', () => {
    checkPassword();
    if (confirmPassword.value !== '') checkConfirmPassword();
});
confirmPassword.addEventListener('input', checkConfirmPassword);

function validateForm(event) {
    event.preventDefault();
    
    const isFullnameValid = checkFullname();
    const isEmailValid = checkEmail();
    const isPasswordValid = checkPassword();
    const isConfirmPasswordValid = checkConfirmPassword();
    
    if (isFullnameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        alert('Đăng ký tài khoản thành công!');
        form.submit();
    }
}

checkFullname();
checkEmail();
checkPassword();
checkConfirmPassword();
