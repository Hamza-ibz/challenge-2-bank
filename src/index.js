import BankAccount from "./BankAccount.js";
import User from "./User.js";
import Transaction from "./Transaction.js";
import BankStatementPrinter from "./BankStatementPrinter.js";

// let user = new User("Hamza", "password");
// let bankAccount = new BankAccount();
// user.depositMoney(bankAccount, new Transaction("1000", "10/01/2012", "Credit"));
// user.withdrawMoney(bankAccount, new Transaction("500", "14/01/2012", "Debit"));
// user.depositMoney(bankAccount, new Transaction("2000", "13/01/2012", "Credit"));
// user.withdrawMoney(bankAccount, new Transaction("500", "14/01/2012", "Debit"));
console.log("");


console.log(`=============== Demonstration of the Software ===============\n`);

console.log(`================ User Login ================\n`);
console.log("The user can login with correct details to access their account:");
console.log("User is logging in....");
let user = new User("Hamza", "password");
console.log("Login successful for user: " + user.getUsername());
console.log("\n");

console.log(`=============== Deposit Funds into an account ===============\n`);
console.log("The user can create a Bank Account and Deposit funds into that bank account:");
console.log("User deposited £1000 on 10 January 2012 with Credit Type\n");
let bankAccount = new BankAccount();
user.depositMoney(bankAccount, new Transaction("1000", "10/01/2012", "Credit"));
console.log(BankStatementPrinter.printBankStatement(bankAccount.getTransaction(), bankAccount.getBalance()));
console.log("\n");
console.log("The user can deposit multiple transactions:");
console.log("User deposited £1000 on 13 January 2012 with Credit Type\n");
user.depositMoney(bankAccount, new Transaction("2000", "13/01/2012", "Credit"));
console.log(BankStatementPrinter.printBankStatement(bankAccount.getTransaction(), bankAccount.getBalance()));
console.log("\n");

console.log(`=============== Withdraw Funds from an account ===============\n`);
console.log("The user can Withdraw funds from a bank account:");
console.log("User Withdrawn £500 on 14 January 2012 with Debit Type\n");
user.withdrawMoney(bankAccount, new Transaction("500", "14/01/2012", "Debit"));
console.log(BankStatementPrinter.printBankStatement(bankAccount.getTransaction(), bankAccount.getBalance()));
console.log("\n");

