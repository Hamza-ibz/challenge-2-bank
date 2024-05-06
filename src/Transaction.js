class Transaction {
    #value;
    #date;
    #type;

    constructor(value, date, type) {
        this.#value = value;
        this.#date = date;
        this.#type = type;
    }

    getValue() {
        return this.#value;
    }
    getDate() {
        return this.#date;
    }
    getType() {
        return this.#type;
    }
}
export default Transaction;