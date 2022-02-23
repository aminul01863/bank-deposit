document.getElementById('login-btn').addEventListener('click', function() {
    const userName = document.getElementById('user-name')
    const emailFild = userName.value
        // console.log(emailFild)
        // user password
    const userPassword = document.getElementById('user-password')
    const passworFild = userPassword.value
        // console.log(passworFild)
    if (emailFild == 'aminul@gmail.com' && passworFild == 'aminul') {
        console.log('valid')
        window.location.href = 'index.html'
    }
})