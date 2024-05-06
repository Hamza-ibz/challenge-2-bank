import BankAccount from "./BankAccount.js";
import User from "./User.js";
import Transaction from "./Transaction.js";
import BankStatementPrinter from "./BankStatementPrinter.js";

let user = new User("Hamza", "password");
let bankAccount = new BankAccount();
user.depositMoney(bankAccount, new Transaction("1000", "10/01/2012", "Credit"));
user.depositMoney(bankAccount, new Transaction("500", "14/01/2012", "Debit"));
user.depositMoney(bankAccount, new Transaction("2000", "13/01/2012", "Credit"));
user.withdrawMoney(bankAccount, new Transaction("500", "14/01/2012", "Debit"));
console.log("");

console.log(BankStatementPrinter.printBankStatement(bankAccount.getTransaction()));

