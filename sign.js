

function signup(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    if(
        name===""||email===""||password===""){
            alert("All box are required");
            return;
        }
 
        let data ={
                name: name,
                email: email,
                password:password
        };
localStorage.setItem("userdata" ,JSON.stringify(data));
      
      alert("signup successfull ! now login");

}