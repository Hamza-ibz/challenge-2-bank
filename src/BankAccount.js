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

    moneyDeposited = () => {
        return this.#transactions;
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