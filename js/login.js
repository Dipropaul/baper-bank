document.getElementById("btn-submit").addEventListener('click', function () {
    // step 2 
    const emailField = document.getElementById("user-email");
    const email = emailField.value;
    const passWord = document.getElementById('user-password');
    const pass = passWord.value;
    if (email === 'sontan@gmail.com' && pass === 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Invalid User');
    }
})