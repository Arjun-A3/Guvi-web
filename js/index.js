// Retrieve username from local storage
const username = localStorage.getItem('username');
// Update welcome message with username if available
if (username) {
    document.getElementById('welcomeMessage').innerText = `Welcome, ${username}!`;
}
function logout(){
    localStorage.removeItem("username");
    window.location.href = "login.html";
}
function isLogged (){
    if(localStorage.getItem("username")==null){
        window.location.href="login.html";
    }
}
isLogged();