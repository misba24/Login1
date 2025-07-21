document.querySelector("form").addEventListener("submit",function(e)
{
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("mobile").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if(password != confirmPassword)
    {
        alert("Passwords do not match");
        return;
    }
    const user = {
        username,
        email,
        number,
        password
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users));

    alert("Sign up successful ! you can now login");
    window.location.href = "login.html";
});