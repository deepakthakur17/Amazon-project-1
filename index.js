// const loginForm = document.getElementById('login-form');
// const errorMessage = document.getElementById('error-message');

// loginForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;

//   // Example login credentials
//   const validUsername = 'admin';
//   const validPassword = 'password';

//   if (username === validUsername && password === validPassword) {
//     // Login successful, redirect to dashboard page
//     window.location.href = "./font_page.html";
//   } else {
//     errorMessage.textContent = 'Invalid username or password';
//   }
// });
// function clickMe(){
//   let h1 = document.getElementById("h1")
//   h1.innerText = "🔯"
// }

let userData = JSON.parse(localStorage.getItem("users")) || []
let loginForm = document.getElementById("login-form")

loginForm.addEventListener("submit", function() {
    event.preventDefault()

    let loginObj = {
        email: loginForm.email.value,
        password: loginForm.password.value,
    }
    let filterUser = userData.filter(function(element) {
        if (element.email === loginObj.email && element.password === loginObj.password) {
            return element;
        }
    })
    if (filterUser.length > 0) {
        alert("Login successfully...")
        window.location.href = "index.html"
    } else {
        alert("Invalid username or password")
    }
})