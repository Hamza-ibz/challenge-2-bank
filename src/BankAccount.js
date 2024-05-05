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
            this.#balance += numericValue;;
            this.#transactions.push(transaction);
            // return this.#balance;
        }

        // let numericValue = parseFloat(transaction.getValue());

        // this.#balance += numericValue;
        // return this.#balance;
    }

    moneyWithdrawn = () => {
        return this.#transactions;
    }

    // depositMoney = (userAccount) => {
    //     // console.log(userAccount)
    //     if (!userAccount?.getTransaction) {
    //         console.log(userAccount.getTransaction())
    //         return;
    //     }
    //     // else {
    //     // this.#userAccount.moneyDeposited();
    //     // }
    // }
}

export default BankAccount;