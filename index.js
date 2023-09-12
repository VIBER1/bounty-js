class BankAccount {
    constructor(accountHolder, accountType) {
        this.accountHolder = accountHolder;
        this.accountType = accountType;
        this.balance = 0;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            throw new Error("Insufficient funds.");
        }
    }

    checkBalance() {
        return this.balance;
    }
}
const accountHolder = document.getElementById("account-holder1").value ;

const accountType = document.getElementById("account-type1").value;

const account = new BankAccount(accountHolder,accountType );

function performTransaction() {
    const transactionType = document.getElementById("transaction-type").value;
    const amount = parseFloat(document.getElementById("amount").value);

    try {
        switch (transactionType) {
            case "deposit":
                account.deposit(amount);
                break;
            case "withdraw":
                account.withdraw(amount);
                break;
            case "balance":
                break;
            default:
                throw new Error("Invalid transaction type.");
        }

        document.getElementById("account-holder").textContent = account.accountHolder;
        document.getElementById("account-type").textContent = account.accountType;
        document.getElementById("balance").textContent = account.checkBalance();
        document.getElementById("message").textContent = "Transaction successful.";
    } catch (error) {
        document.getElementById("message").textContent = error.message;
    } finally {
        document.getElementById("amount").value = "";
    }
}
