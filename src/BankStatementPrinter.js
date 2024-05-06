class BankStatementPrinter {

    constructor() {
        if (new.target === BankStatementPrinter)
            throw new Error("Cannot create instance of abstract class");
    }

    static valueFormat(transaction) {
        return parseFloat((Math.round(transaction * 100) / 100)).toFixed(2);
    }

    // format on the printing of credit type in console
    static creditPrint(transaction, balance) {
        return `${transaction.getDate()} || ${this.valueFormat(transaction.getValue())} ||        || ${this.valueFormat(balance)}`;
    }

    // format on the printing of debit type in console
    static debitPrint(transaction, balance) {
        return `${transaction.getDate()} ||         || ${this.valueFormat(transaction.getValue())} || ${this.valueFormat(balance)}`;
    }

    static printDetails(transaction, balance) {
        if (transaction.getType() === "Credit") {
            return console.log(this.creditPrint(transaction, balance));
        }

        return console.log(this.debitPrint(transaction, balance));
    }

    static printBankStatement(transactions, balance) {
        // reference:- https://stackoverflow.com/questions/5433313/convert-dd-mm-yyyy-to-mm-dd-yyyy-in-javascript
        function toDate(dateString) {
            let parts = dateString.split("/");
            return new Date(parts[2], parts[1] - 1, parts[0]);
        }
        // reference:- https://stackoverflow.com/questions/10123953/how-to-sort-an-object-array-by-date-property
        transactions.sort((a, b) => toDate(b.getDate()) - toDate(a.getDate()));

        console.log("date       || credit  || debit  || balance");
        let currentBalance = balance;
        transactions.forEach((transaction) => {
            this.printDetails(transaction, currentBalance);
            if (transaction.getType() === "Credit") {
                currentBalance -= parseFloat(transaction.getValue());
            }
            else {
                currentBalance += parseFloat(transaction.getValue());
            }
        });
    }
}
export default BankStatementPrinter;