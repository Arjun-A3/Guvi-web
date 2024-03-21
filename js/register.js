$(document).ready(function(){
    $('button').click(function(){
        var username = $('#username').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var confirm_password = $('#confirm_password').val();
        if(password != confirm_password){
            alert("Enter same password");
            return;
        }

        // Data to be sent to the PHP file
        var data = {
            username: username,
            email: email,
            password: password
        };
        f = false;
        // AJAX request
        $.ajax({
            type: 'POST',
            url: '/GUVI-WEBASSIGNMENT/GUVI-webapp/php/register.php', // URL to your PHP file
            data: data,
            success: function(response){
                if(response=="Error: Username or email already exists."){
                alert("Username or email already in use");
                f=true;
                }
                // Handle success
                console.log(response);
                window.location.href="logon.html";
                // You can add further handling here, like showing a success message to the user.
            },
            error: function(xhr, status, error){
                // Handle errors
                console.error(xhr.responseText);
                // You can add further error handling here, like showing an error message to the user.
            }
        })
    });
});
function isLoggedIn(){
    if(window.localStorage.getItem("username")!=null){
        window.location.href = "index.html";
    }
}
isLoggedIn();