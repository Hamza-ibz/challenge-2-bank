class BankAccount {
    #transactions = [];

    constructor() {

    }

    getTransaction = () => {
        return this.#transactions;
    }

    moneyDeposited = () => {
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