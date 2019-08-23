function checkAccReg() {
    let custID = document.getElementById("cust-id").value;
    let accType = document.getElementById("acc-type").options[document.getElementById("acc-type").selectedIndex];
    let depAmount = document.getElementById("deposit-amount").value;

    document.getElementById("cust-id").className = "form-control";
    document.getElementById("cust-id-error").innerText = "";
    document.getElementById("acc-type-error").innerText = "";
    document.getElementById("deposit-amount").className = "form-control";
    document.getElementById("deposit-amount-error").innerText = "";

    if (isNaN(custID) || custID.length == 9) {
        document.getElementById("cust-id").className += " is-invalid";
        document.getElementById("cust-id-error").innerText = "Please enter a valid id!"
    }
    if (accType.value === "") {
        document.getElementById("acc-type-error").innerText = "Please choose account type!";
    }
}