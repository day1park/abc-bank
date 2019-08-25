
function edit(){
    let account = JSON.parse(localStorage.getItem("account"))

    let id = document.getElementById("cust-ssn-id").value
    let id1 = document.getElementById("cust-id").value

    console.log(id)
    console.log(id1)

    document.getElementById("cust-ssn-id").className = "form-control";
    document.getElementById("cust-ssn-id-error").innerText = "";

    document.getElementById("cust-id").className = "form-control";
    document.getElementById("cust-id-error").innerText = "";

    if(id == "" && id1 == "" ){
        document.getElementById("cust-ssn-id").className += " is-invalid";
        document.getElementById("cust-ssn-id-error").innerText = "Please enter ssnID or customer ID"

        document.getElementById("cust-id").className += " is-invalid";
        document.getElementById("cust-id-error").innerText = "Please enter ssnID or customer ID"
        return
    }
    let check = 0;


    for(let i = 0; i < account.length; i++){
        if(id == account[i].id || id1 == account[i].customer_id){
            console.log(id)
            check = 1;
            let ac = account[i]
            document.getElementsByClassName('display-edit')[0].style.display = "block";
            document.getElementById("ssn-id-show").value = ac.id
            document.getElementById("cust-id-show").value = ac.customer_id
            document.getElementById("cust-first-name").value = ac.firstname
            document.getElementById("cust-last-name").value = ac.lastname
            document.getElementById("cust-age").value = ac.age
            document.getElementById("cust-address-1").value = ac.address
            document.getElementById("cust-address-2").value = ac.address_2
            document.getElementById("cust-city").value = ac.city
            document.getElementById("cust-state").value = ac.state
        }
    }

    if(!check){
        document.getElementById("cust-ssn-id").className += " is-invalid";
        document.getElementById("cust-ssn-id-error").innerText = "can not find the user"
    }
}

function submit_customer(){
    let account = JSON.parse(localStorage.getItem("account"));

    id = document.getElementById("ssn-id-show").value;
    firstname = document.getElementById("cust-first-name").value;
    lastname = document.getElementById("cust-last-name").value;
    age = document.getElementById("cust-age").value;
    address = document.getElementById("cust-address-1").value;
    address_2 = document.getElementById("cust-address-2").value;
    city = document.getElementById("cust-city").value;
    state = document.getElementById("cust-state").value; 

    let d = new Date
    for(let i = 0; i < account.length; i++){
        if(id == account[i].id){
            let ac = account[i];
            ac.firstname = firstname;
            ac.lastname = lastname;
            ac.age = age;
            ac.address = address;
            ac.address_2 = address_2;
            ac.city = city;
            ac.state = state;
            ac.last_update = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear()
        }
    } 

    localStorage.setItem("account", JSON.stringify(account));
    console.log(account);
    alert("Edit file successfully!")
    window.location.href = "./home-cae.html"
}

function delete_account(){
    let account = JSON.parse(localStorage.getItem("account"))

    id = document.getElementById("ssn-id-show").value;
    cus_id =  document.getElementById("cust-id-show").value;
    for(let i = 0; i < account.length; i++){
        if(account[i].id == id || account[i].customer_id == cus_id ){
            console.log(123)
            for(let j = 0; j < account[i].bank_account.length; j++){
                if (account[i].bank_account[j].status === "active"){
                    alert('you still have active account')
                    return
                }
            }
        }
    }

    // need test
    for(let i = 0; i < account.length; i++){
        if(account[i].id == id || account[i].customer_id == cus_id){
        account.splice(i,1);
        alert('delete successfully')
        localStorage.setItem("account", JSON.stringify(account));
        window.location.href = './home-cae.html'
        }
    }

}

function view_customer(){
    id = document.getElementById("ssn-id-show").value
    localStorage.setItem("current_cus", id)
    window.location.href = './cae-view-customer.html'
}


let account = JSON.parse(localStorage.getItem("account"))
console.log(account)







