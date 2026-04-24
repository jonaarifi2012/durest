function showSnackbar(message, isSuccess = true) {
    const snackbar = document.getElementById('snackbar');
    snackbar.textContent = message;
    snackbar.style.backgroundColor = isSuccess ? "#4caf50" : "#f44336";
    snackbar.className = "show";

    setTimeout(() => {
        snackbar.className = snackbar.className.replace('show', "");
    }, 3000)
}





let signupForm = document.getElementById('signupForm');

if(signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();

        if(!name || !email || !password || !confirmPassword) {
            showSnackbar("Please fill all the fields", false);
            return;
        }

        if(password != confirmPassword) {
            showSnackbar("Password does not match", false);
            return;
        }

        const user = {name, email, password};
        localStorage.setItem('user', JSON.stringify(user));
        showSnackbar("Registration succesful", true);

        setTimeout(() => {window.location.href = "login.html"}, 1500)
    })
}

let loginForm = document.getElementById('loginForm');

if(loginForm) {
    loginForm.addEventListener('submit', (e) =>{
        e.preventDefault();

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        const storedUser = JSON.parse(localStorage.getItem('user'));

        if(!storedUser || !storedUser.email != email || storedUser.password != password) {
            showSnackbar("Invalid email or password", false);
            return;
        }

        localStorage.setItem('isLoggedIn', true);
        showSnackbar("Login succesful", true);

        setTimeout(() => {window.location.hef = "home.html"}, 2000);
    });
}