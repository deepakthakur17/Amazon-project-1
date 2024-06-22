let userData = JSON.parse(localStorage.getItem("users")) || []
let loginForm = document.getElementById("login-form")

loginForm.addEventListener("submit", function () {
    event.preventDefault()

    let loginObj = {
        name: loginForm.name.value,
        gender: loginForm.gender.value,
        date: loginForm.date.value,
        email: loginForm.email.value,
        password: loginForm.password.value,

    }
    userData.push(loginObj)
    localStorage.setItem("users",JSON.stringify(userData))
    loginForm.reset()
    alert("Your registation is successfully...")
    window.location.href = "index.html"
})