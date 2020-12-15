class Customer {
    constructor(firstname,lastname) {
        this._firstname = firstname;
        this._lastname = lastname;
    }

    get firstName() {
        return this.firstname;
    }

    get lastName() {
        return this.lastName;
    }
}

class BankAccount {
    constructor(customer) {
        this._customer = customer;
        this._balance = 0;
        if (BankAccount.prototype.count) {
            BankAccount.prototype.count++;
            this._accountId = 1000+BankAccount.prototype.count;
        } else {
            BankAccount.prototype.count = 1;
            this._accountId = 1001;
        }
    }

    deposit(amount) {
        if (amount < 0) {
            console.log("Invalid amount!");
        } else {
            this._balance+=amount;
        }
    }

    withdraw(amount) {
        if (amount < 0) {
            console.log("Invalid amount!");
        } else if (amount > this._balance) {
            console.log("Insufficient balance!");
        } else {
            this._balance-=amount;
        }
    }

    get balance() {
        return this._balance;
    }
   
}

let c1 = new Customer("Pathinya","Thonguam")
console.log(c1);
let b1 = new BankAccount(c1);
console.log(b1);

//test running account number
let c2 = new Customer("Napat","Watt")
let b2 = new BankAccount(c2);
console.log(b2);

b1.deposit(1000);
console.log(b1.balance);
b1.withdraw(250);
console.log(b1.balance);
