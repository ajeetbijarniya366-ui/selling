

function login(){
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;

    let storedData = localStorage.getItem("userdata");


     if (storedData === null){
        alert("no account in signup");
    }

    let data = JSON.parse(storedData);

    if (name === data.name && password === data.password){
    document.getElementById("msg").innerText= "login successfull "
     window.location.href= "fashion.html";
} else {
    document.getElementById("msg").innerText= "invalid name or password";
}
}