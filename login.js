document.querySelector("form").addEventListener("submit", function(e){
e.preventDefault();

const identifier = document.getElementById("identifier").value.trim();
const password = document.getElementById("password").value.trim();

const users = JSON.parse(localStorage.getItem("users")) || [];

const foundUser = users.find(
    (user) =>
    (user.email === identifier || 
        user.username === identifier || 
        user.number === identifier) &&
        user.password === password
    );

    if(foundUser){
        alert("login successful !");
        window.location.href = "dashboard.html";
    }
    else{
        alert("Invalid credentails or user not found");
    }
});
