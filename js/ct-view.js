// need to replace
let account = {
    bank_id: 123456789,
    account_type: "Saving",
    amount: 123,
    create_date: "12/09/2018",
    note: '',
    statement: [
        {
            id: '456789123',
            date: '31/12/2018',
            type: 'Withdrawal',
            credit: '456',
            debit: '',
            balance: 150
        }
    ],
    closing_date: "01/01/2019",
};

let custTrans = document.getElementById("cust-transactions");
let row;
let accID;
let transID;
let transDate;
let transType;
let credit;
let debit;
let balance;

// for table's content
if (account.statement != []) {
    for (transaction of account.statement) {
        row = document.createElement("tr");
        row.id = transaction.id;
        accID = document.createElement("td");
        accID.innerText = account.bank_id;
        row.appendChild(accID);
        transID = document.createElement("td");
        transID.innerText = transaction.id;
        row.appendChild(transID);
        transDate = document.createElement("td");
        transDate.innerText = transaction.date;
        row.appendChild(transDate);
        transType = document.createElement("td");
        transType.innerText = transaction.type;
        row.appendChild(transType);
        credit = document.createElement("td");
        credit.innerText = transaction.credit;
        row.appendChild(credit);
        debit = document.createElement("td");
        debit.innerText = transaction.debit;
        row.appendChild(debit);
        balance = document.createElement("td");
        balance.innerText = transaction.balance;
        row.appendChild(balance);
        custTrans.appendChild(row);
    }
}