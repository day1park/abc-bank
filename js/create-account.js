function checkAccReg() {

    let account = JSON.parse(localStorage.getItem("account"))


    let custID = document.getElementById("cust-id").value;
    let accType = document.getElementById("acc-type").value;
    let depAmount = document.getElementById("deposit-amount").value;
    let note = document.getElementById("cust-note").value;

    document.getElementById("cust-id").className = "form-control";
    document.getElementById("cust-id-error").innerText = "";

    document.getElementById("acc-type").className = "form-control";
    document.getElementById("acc-type-error").innerText = "";

    document.getElementById("deposit-amount").className = "form-control";
    document.getElementById("deposit-amount-error").innerText = "";

    if (isNaN(custID)) {
        document.getElementById("cust-id").className += " is-invalid";
        document.getElementById("cust-id-error").innerText = "Please enter id!"
        return
    }else if (custID.length != 9){
        document.getElementById("cust-id").className += " is-invalid";
        document.getElementById("cust-id-error").innerText = "Please input 9 digits ID!"
        return
    }
    let done = 0;

    for(let i = 0; i < account.length; i++){
        if (custID == account[i].customer_id){
            done = 1
            }
        }
    if(done == 0){
        document.getElementById("cust-id").className += " is-invalid";
        document.getElementById("cust-id-error").innerText = "Can not find this customer ID!"
        return
    }


    if (accType == "") {
        document.getElementById("acc-type").className += " is-invalid";
        document.getElementById("acc-type-error").innerText = "Please choose account type!";
        return
    }

    if(depAmount == ""){
        document.getElementById("deposit-amount").className += " is-invalid";
        document.getElementById("deposit-amount-error").innerText = "please enter deposit amount"
        return
    }

    if (!(Number.isInteger(Number(depAmount)))){
        document.getElementById("deposit-amount").className += " is-invalid";
        document.getElementById("deposit-amount-error").innerText = "please only enter integer number"
        return
    }

    let d = new Date
    for(let i = 0; i < account.length; i++){
        if (custID == account[i].customer_id){
            let transaction = {
                transaction_id: String(Math.floor((Math.random() * 100) + 1)),
                date: d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear(),
                amount: depAmount,
                note:'',

            }
            
            let tmp = {
                bank_id: account[i].id + String(Math.floor((Math.random() * 10000) + 1)),
                account_type: accType,
                total_amount: depAmount,
                create_date: d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear(),
                statement: [transaction],
                closing_date: '',
                note: note,
                status: 'active'
            }

            account[i].bank_account.push(tmp)
            break
        }
    }

    localStorage.setItem("account", JSON.stringify(account));
    console.log(account)
    alert("Account creation intiated successfully")
    window.location.href = "./home-cae.html"

}


let account = JSON.parse(localStorage.getItem("account"))
console.log(account)