class BankStatementPrinter {

    constructor() {
        if (new.target === BankStatementPrinter)
            throw new Error("Cannot create instance of abstract class");
    }

    static debitPrint(transaction, balance) {
        const debitPrint = transaction.getValue();
        const balancePrint = balance;
        const datePrint = transaction.getDate();
        return `${datePrint} ||         || ${debitPrint} || ${balancePrint}`;
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
        transactions.forEach((transaction) => {
            console.log(this.debitPrint(transaction, balance));

        });
    }
}
export default BankStatementPrinter;