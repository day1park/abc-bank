let type = localStorage.getItem("type")
if (type == "ae"){
    let name = localStorage.getItem("CAE_real_usename");
    document.getElementById("title-name").innerText = "Welcome, " + name
    document.getElementById("title-role").innerText = "New account/New Account Executive";
}else{
    let name = localStorage.getItem("cashier_username");
    document.getElementById("title-name").innerText = "Welcome, " + name;
    document.getElementById("title-role").innerText = "Cashier/Teller";
}


