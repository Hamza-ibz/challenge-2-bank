class BankAccount {
    #transactions = [];
    #balance;

    constructor(balance = 0) {
        this.#balance = balance;
    }

    getTransaction = () => {
        return this.#transactions;
    }

    getBalance = () => {
        return this.#balance;
    }

    moneyDeposited = (transaction) => {

        if (!transaction?.getValue) {
            return;
        }
        else {
            let numericValue = parseFloat(transaction.getValue());
            if (isNaN(numericValue) || numericValue <= 0) {
                return;
            }

            this.#balance += numericValue;;
            this.#transactions.push(transaction);
        }
    }

    moneyWithdrawn = (transaction) => {
        if (!transaction?.getValue) {
            return;
        }
        else {
            let numericValue = parseFloat(transaction.getValue());
            if (isNaN(numericValue) || numericValue <= 0) {
                return;
            }

            // if balance will be less than zero and we exceeded our overdraft limit
            if ((this.#balance - numericValue) < 0) {
                return;
            }

            this.#balance -= numericValue;;
            this.#transactions.push(transaction);
        }
    }
}

export default BankAccount;