

function restetpassword(){
    let email = document.getElementById("email").value;
    let newpasword = document.getElementById("newpassword").value;

    let storeData= localStorage.getItem("userdata");
    if(storeData===null){
        document.getElementById("msg").innerText="no user found  plaese sign up";
        return
    }
    let user=JSON.parse(storeData);

    if("email===useremail"){
        user.password=newpasword;
        localStorage.setItem("userData",JSON.stringify(user));

        document.getElementById("msg").innerText="password updated succesfully";
    }else{
        document.getElementById("msg").innerText="email not registered";
    }
    
}