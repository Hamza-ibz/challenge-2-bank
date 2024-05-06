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

        // Makes sure argument has a getValue function
        if (!transaction?.getValue) {
            return;
        }
        else {
            // convert value to float and check if its a number that is greater then 0
            let numericValue = parseFloat(transaction.getValue());
            if (isNaN(numericValue) || numericValue <= 0) {
                return;
            }

            this.#balance += numericValue;;
            this.#transactions.push(transaction);
        }
    }

    moneyWithdrawn = (transaction) => {
        // Makes sure argument has a getValue function

        if (!transaction?.getValue) {
            return;
        }
        else {

            // convert value to float and check if its a number that is greater then 0
            let numericValue = parseFloat(transaction.getValue());
            if (isNaN(numericValue) || numericValue <= 0) {
                return;
            }

            // makes sure balance above 0
            if ((this.#balance - numericValue) < 0) {
                return;
            }

            this.#balance -= numericValue;;
            this.#transactions.push(transaction);
        }
    }
}

export default BankAccount;