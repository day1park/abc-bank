
function Validation() {
    let type = document.getElementById("login-role").value;


    if(type == 'CAE'){
        let initial_account = []
        localStorage.setItem("account", JSON.stringify(initial_account))
    }else{
        JSON.parse(localStorage.getItem("account"))
    }

    let userAccount = document.getElementById("login-user").value;
    let password = document.getElementById("login-password").value;

    document.getElementById("role-error").style.display = "none";
    document.getElementById("user-error-1").style.display = "none";
    document.getElementById("user-error-2").style.display = "none";
    document.getElementById("user-error-3").style.display = "none";
    document.getElementById("password-error-1").style.display = "none";
    document.getElementById("password-error-2").style.display = "none";
    document.getElementById("password-error-3").style.display = "none";

    // validation for userAccount, password, type.
    if (type === ""){
        document.getElementById("role-error").style.display = "block";
        return
    }

    if (userAccount.length < 8){
        document.getElementById("user-error-2").style.display = "block";
        return
    }

    if ((/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/).test(userAccount)){
        document.getElementById("user-error-1").style.display = "block";
        return
    }


    if (password.length < 10){
        document.getElementById("password-error-2").style.display = "block";
        return
    }

    if (password.search(/[A-Z]/) == -1 || password.search(/[0-9]/) == -1 || password.search(/^[0-9a-zA-Z]+$/) != -1){
        document.getElementById("password-error-1").style.display = "block";
        return
    }


    if (type == "CAE"){
        if (userAccount != localStorage.getItem("CAE_real_usename") ){
            document.getElementById("user-error-3").style.display = "block";
            return
        } else if (password != localStorage.getItem("CAE_real_password")){
            document.getElementById("password-error-3").style.display = "block";
            return    
        } else{
            localStorage.setItem("type", "ae")
            window.location.href = "./home-cae.html";
        }
    }

    if(type == "CT"){
        if (userAccount != localStorage.getItem("cashier_username") ){
            document.getElementById("user-error-3").style.display = "block";
            return
        } else if (password != localStorage.getItem("cashier_password")){
            document.getElementById("password-error-3").style.display = "block";
            return    
        } else {
            localStorage.setItem("type", "ct")
            window.location.href = "./home-ct.html";
        }
    }

}


