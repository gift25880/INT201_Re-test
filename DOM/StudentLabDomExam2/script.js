class Customer {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

class AccountIdGenerator {
  static runningId = 1001;
  static getRunningId() {
    return AccountIdGenerator.runningId++;
  }
}

class BankAccount {
  constructor(customer, initialBalance) {
    this._accountId = AccountIdGenerator.runningId++;
    this._customer = customer;
    this._balance = initialBalance;
  }
  get accountId() {
    return this._accountId;
  }
  deposit(amount) {
    return (this._balance += amount);
  }
  withdraw(amount) {
    return (this._balance -= amount);
  }
  get balance() {
    return this._balance;
  }
  get customer() {
    return this._customer;
  }
}


class Transaction{
  static writeCustomerInfo(obj){
    let custInfo = obj.accountId + "-" + obj.customer.fullName;
    let h2 = document.getElementsByClassName("cust_info")[0];
    h2.innerText = custInfo;
  }
  static writeTransaction(date,operation,amount,balance){
    let table = document.getElementById("transaction");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerText = date;
    cell2.innerText = operation;
    cell3.innerText = amount;
    cell4.innerText = balance;
  }

}

function main(){
  let today = new Date();
  let transDate =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  let cust1 = new Customer("Paul", "Rakdee");
  
  let ba1 = new BankAccount(cust1, 500);
  Transaction.writeCustomerInfo(ba1);

  Transaction.writeTransaction(transDate, "open account", 500, ba1.balance);


  ba1.deposit(1000);
  Transaction.writeTransaction(transDate, "deposit", 1000, ba1.balance);

  ba1.withdraw(100);
  Transaction.writeTransaction(transDate, "withdraw", 100, ba1.balance);

  ba1.deposit(500);
  Transaction.writeTransaction(transDate, "deposit", 500, ba1.balance);

  ba1.withdraw(200);
  Transaction.writeTransaction(transDate, "withdraw", 200, ba1.balance);


}
main();
