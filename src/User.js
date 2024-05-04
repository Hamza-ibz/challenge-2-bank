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

    login(username, password) {
        if (username === this.#username && password === this.#password) {
            return true;
        }
    }

}

export default User;