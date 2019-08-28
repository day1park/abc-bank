let account = JSON.parse(localStorage.getItem("account"))
console.log(account)
let id= localStorage.getItem("ssn_number")
let cus_id = localStorage.getItem("cus_number")

if(id == ''){
    document.getElementById("cust-id-show").value = cus_id;
}else{
    document.getElementById("cust-id-show").value = id; 
}

let ac;
let row;
let accID;
let type;
let status;
let note;
let lastUpdated;
let refreshButton;
let custAccounts = document.getElementById("cust-accounts");

for(let i = 0; i < account.length; i++){
    if(id == account[i].id || cus_id == account[i].customer_id){
        for(let j = 0; j < account[i].bank_account.length; j++){

            ac = account[i].bank_account[j]
            console.log(ac.bank_id)
            row = document.createElement("tr");
            row.id = ac.bank_id;
            accID = document.createElement("td");
            accID.innerText = ac.bank_id;
            row.appendChild(accID);

            
            type = document.createElement("td");
            type.innerText = ac.account_type;
            row.appendChild(type);

            status = document.createElement("td");
            status.innerText = ac.status;
            console.log(ac.status)
            row.appendChild(status);

            note = document.createElement("td");
            note.innerText = ac.note;
            row.appendChild(note);


            lastUpdated = document.createElement("td");
            
            lastUpdated.innerText = ac.statement != [] ? ac.statement[0].date : "";
            row.appendChild(lastUpdated);

            refreshButton = document.createElement("button");
            refreshButton.innerText = "Refresh";
            refreshButton.className = "btn btn-success";
            refreshButton.style.marginTop = "5px";
            refreshButton.type = "button";
            row.appendChild(refreshButton);
            custAccounts.appendChild(row);
        }
    }
}

console.log(account)



// let custAccounts = document.getElementById("cust-accounts");
// let row;
// let accID;
// let type;
// let status;
// let note;
// let lastUpdated;
// let refreshButton;

// for (account of accounts) {
//     row = document.createElement("tr");
//     row.id = account.bank_id;
//     accID = document.createElement("td");
//     accID.innerText = account.bank_id;
//     row.appendChild(accID);
//     type = document.createElement("td");
//     type.innerText = account.account_type;
//     row.appendChild(type);
//     status = document.createElement("td");
//     status.innerText = account.closing_date == "" ? "Open" : "Close";
//     row.appendChild(status);
//     note = document.createElement("td");
//     note.innerText = account.note;
//     row.appendChild(note);
//     lastUpdated = document.createElement("td");
//     lastUpdated.innerText = account.statement == [] ? account.statement[0].date : "";
//     row.appendChild(lastUpdated);
//     refreshButton = document.createElement("button");
//     refreshButton.innerText = "Refresh";
//     refreshButton.className = "btn btn-success";
//     refreshButton.style.marginTop = "5px";
//     refreshButton.type = "button";
//     row.appendChild(refreshButton);
//     custAccounts.appendChild(row);
// }


// console.log(localStorage.getItem("edit_number"))