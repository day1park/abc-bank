
let account = JSON.parse(localStorage.getItem("account"))
let current_cus_id = localStorage.getItem("current_cus")

for(let i = 0; i < account.length; i++){
    let ac = account[i]
    if(ac.id == current_cus_id ){
    document.getElementById("cust-id").innerText = ac.customer_id
    document.getElementById("ssn-id").innerText = ac.id
    document.getElementById("username").innerText = ac.firstname + " " + ac.lastname
    document.getElementById("note").innerText = ac.note
    document.getElementById("last-updated").innerText = ac.last_update;
    }
}





