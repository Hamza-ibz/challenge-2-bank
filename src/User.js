class User {
    #username;
    #password;
    #userAccount;

    constructor(username, password, userAccount) {
        this.#username = username;
        this.#password = password;
        // if (!userAccount?.getTransaction) {
        //     this.#userAccount = {};
        // } else {
        this.#userAccount = userAccount;
        // }
    }

    getUsername() {
        return this.#username;
    }

    getPassword() {
        return this.#password;
    }

    getUserAccount() {
        return this.#userAccount;
    }

    login(username, password) {
        if (username === this.#username && password === this.#password) {
            return true;
        }
        return false;
    }

    depositMoney = (userAccount) => {

        if (!userAccount?.moneyDeposited) {
            return false;
        }
        else {
            userAccount.moneyDeposited();
            return true;
        }
    }

}

export default User;