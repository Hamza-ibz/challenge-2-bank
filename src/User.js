class User {
    #username;
    #password;
    #userAccount;

    constructor(username, password, userAccount) {
        this.#username = username;
        this.#password = password;
        this.#userAccount = userAccount;
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

    // user name and password has to match for login
    login(username, password) {
        if (username === this.#username && password === this.#password) {
            return true;
        }
        return false;
    }

    depositMoney = (userAccount, transaction) => {

        // Makes sure argument has a moneyDeposited/getType function
        if (!userAccount?.moneyDeposited || !transaction?.getType) {
            return false;
        }
        else {
            userAccount.moneyDeposited(transaction);
            return true;
        }
    }

    withdrawMoney = (userAccount, transaction) => {

        // Makes sure argument has a moneyWithdrawn/getType function
        if (!userAccount?.moneyWithdrawn || !transaction?.getType) {
            return false;
        }
        else {
            userAccount.moneyWithdrawn(transaction);
            return true;
        }
    }

}

export default User;