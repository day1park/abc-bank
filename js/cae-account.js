function show_account(){

    let account = JSON.parse(localStorage.getItem("account"));
    console.log(account);

    
    let id = document.getElementById("cust-ssn-id").value
    let id1 = document.getElementById("cust-id").value

    document.getElementById("cust-ssn-id").className = "form-control";
    document.getElementById("cust-ssn-id-error").innerText = "";

    document.getElementById("cust-id").className = "form-control";
    document.getElementById("cust-id-error").innerText = "";

    if(id == "" && id1 == "" ){
        document.getElementById("cust-ssn-id").className += " is-invalid";
        document.getElementById("cust-ssn-id-error").innerText = "Please enter SSNID or customer id"

        document.getElementById("cust-id").className += " is-invalid";
        document.getElementById("cust-id-error").innerText = "Please enter SSNID or customer ID"
        return
    }
    let check = 0;

    for(let i = 0; i < account.length; i++){
        if(id == account[i].id || id1 == account[i].customer_id){
            check = 1;
            let ac = account[i]
            document.getElementsByClassName('display-accounts')[0].style.display = "block";
            
            show_table(account[i])
            break  
        }
    }

    if(!check){
        document.getElementById("cust-ssn-id").className += " is-invalid";
        document.getElementById("cust-ssn-id-error").innerText = "can not find the user"
    }
}

function deleteAccount() {
    // please implement
    let account = JSON.parse(localStorage.getItem("account"));
    console.log(event.target.parentNode.id);  // use this variable to get the id??
    let id = event.target.parentNode.id;


    
    for(let i = 0;  i < account.length; i++ ){
        let ac = account[i]
        for(let j = 0; j < ac.bank_account.length; j++){
            
            if(id == ac.bank_account[j].bank_id){
                ac.bank_account.splice(j,1);
            }
        }
    }

    alert("Your bank account " + id + " has been deleted ")
    localStorage.setItem("account", JSON.stringify(account));
    console.log(account)
    location.reload();
}

function show_table(cur_ac) {
    let custAccounts = document.getElementById("cust-accounts");
    let row;
    let id;
    let type;
    let balance;
    let creationDate;
    let closingDate;
    let duration;
    let deleteButton;
    custAccounts.innerHTML = "";

    for (let j = 0 ; j < cur_ac.bank_account.length; j++) {
        let bank_ac = cur_ac.bank_account[j]
        row = document.createElement("tr");
        row.id = bank_ac.bank_id;
        id = document.createElement("td");
        id.innerText = bank_ac.bank_id;
        row.appendChild(id);
        type = document.createElement("td");
        type.innerText = bank_ac.account_type;
        row.appendChild(type);
        balance = document.createElement("td");
        balance.innerText = bank_ac.total_amount + " AUD";
        row.appendChild(balance);
        creationDate = document.createElement("td");
        creationDate.innerText = bank_ac.create_date;
        row.appendChild(creationDate);
        closingDate = document.createElement("td");
        closingDate.innerText = bank_ac.closing_date;
        row.appendChild(closingDate);
        duration = document.createElement("td");
        if (closingDate != "") {
            duration.innerText = Math.ceil(Math.abs((new Date(bank_ac.closing_date)).getTime() - (new Date(bank_ac.create_date)).getTime()) / (1000 * 60 * 60 * 24));
        }
        row.appendChild(duration);
        deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.className = "btn delete-button";
        deleteButton.type = "button";
        deleteButton.onclick = function() { deleteAccount(); };
        row.appendChild(deleteButton);
        custAccounts.appendChild(row);
    }    
}

function view_button(){
    let id = document.getElementById("cust-ssn-id").value
    let id1 = document.getElementById("cust-id").value

    if(id == ''){
    console.log(123)
    localStorage.setItem("ssn_number", '')
    localStorage.setItem("cus_number", id1)
    } else{
        localStorage.setItem("cus_number", '')
        localStorage.setItem("ssn_number", id)
    }

    window.location.href = './cae-view-account.html'

}
    