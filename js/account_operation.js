function register() {

    let account = JSON.parse(localStorage.getItem("account"))
    //Get all the value from the html
    let id = document.getElementById("cust-id").value
    let firstname = document.getElementById("cust-first-name").value
    let lastname = document.getElementById("cust-last-name").value
    let age = document.getElementById("cust-age").value
    let address = document.getElementById("cust-address-1").value
    let address_2 = document.getElementById("cust-address-2").value
    let city = document.getElementById("cust-city").value
    let state = document.getElementById("cust-state").value
    let note = document.getElementById("cust-note").value

    document.getElementById("cust-id").className = "form-control";
    document.getElementById("cust-id-error").innerText = "";
    document.getElementById("cust-first-name").className = "form-control";
    document.getElementById("cust-first-name-error").innerText = "";
    document.getElementById("cust-last-name").className = "form-control";
    document.getElementById("cust-last-name-error").innerText = "";
    document.getElementById("cust-address-1").className = "form-control";
    document.getElementById("cust-address-1-error").innerText = "";
    document.getElementById("cust-age").className = "form-control";
    document.getElementById("cust-age").innerText = "";
    document.getElementById("cust-city").className = "form-control";
    document.getElementById("cust-city").innerText = "";


    if(id == ""){
        document.getElementById("cust-id").className += " is-invalid";
        document.getElementById("cust-id-error").innerText = "Please enter id";
        return
    } else if( id.length != 9){
        document.getElementById("cust-id").className += " is-invalid";
        document.getElementById("cust-id-error").innerText = "The id length should be 9";
        return
    }

    for(let i = 0; i < account.length; i++){
        if (id == account[i].id){
            document.getElementById("cust-id").className += " is-invalid";
            document.getElementById("cust-id-error").innerText = "This customer already exist";
            return
        }
    }
    

    if(firstname == ""){
        document.getElementById("cust-first-name").className += " is-invalid";
        document.getElementById("cust-first-name-error").innerText = "Please enter firstname";
        return
    }else if(!(firstname.match(/^[A-Za-z]+$/))){
        document.getElementById("cust-first-name").className += " is-invalid";
        document.getElementById("cust-first-name-error").innerText = "First name should be in alphabetic";
        return
    }

    if(lastname == ""){
        document.getElementById("cust-last-name").className += " is-invalid";
        document.getElementById("cust-last-name-error").innerText = "Please enter lastname";
        return
    }else if(!(lastname.match(/^[A-Za-z]+$/))){
        document.getElementById("cust-last-name").className += " is-invalid";
        document.getElementById("cust-last-name-error").innerText = "last name should be in alphabetic";
        return
    }
    
    if(age == ""){
        document.getElementById("cust-age").className += " is-invalid";
        document.getElementById("cust-age-error").innerText = "Please enter age";
        return
    }else if(age.length > 3){
        document.getElementById("cust-age").className += " is-invalid";
        document.getElementById("cust-age-error").innerText = "The age length should be less than 3";
        return
    }

    if(address == ""){
        document.getElementById("cust-address-1").className += " is-invalid";
        document.getElementById("cust-address-1-error").innerText = "Please enter address";
        return
    }else if ((/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/).test(address)){
        document.getElementById("cust-address-1").className += " is-invalid";
        document.getElementById("cust-address-1-error").innerText = "Address should be alphnumeric";
        return
    }

    if(city == ""){
        document.getElementById("cust-city").className += " is-invalid";
        document.getElementById("cust-city-error").innerText = "Please enter city";
        return
    }

    
    if(state == ""){
        document.getElementById("cust-state").className += " is-invalid";
        document.getElementById("cust-state-error").innerText = "Please enter state";
        return
    }

    let d = new Date
    account.push({
        id: id,
        customer_id: id.slice(0,5) + String(Math.floor((Math.random() * 10000) + 1)),
        firstname: firstname,
        lastname: lastname,
        age: age,
        address: address,
        address_2:address_2,
        city: city,
        state: state,
        note: note,
        bank_account: [],
        last_update: d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear()
    })

    localStorage.setItem("account", JSON.stringify(account))

    alert("customer creation initiated successfully")
    window.location.href = "./home-cae.html"
}

let account = JSON.parse(localStorage.getItem("account"))
console.log(account)
