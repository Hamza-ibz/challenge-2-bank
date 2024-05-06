import BankAccount from "./BankAccount.js";
import User from "./User.js";
import Transaction from "./Transaction.js";
import BankStatementPrinter from "./BankStatementPrinter.js";

console.log(`=============== Demonstration of the Software ===============\n`);

// Demonstration of user story 1 and 4:-
// As a customer,
// I want to be able to access my account,
// So that I can view my account details.
console.log(`================ User Login ================\n`);
console.log("The user can login with correct details to access their account:");
console.log("User is logging in....");
let user = new User("Hamza", "password");
console.log("Login successful for user: " + user.getUsername());
console.log("\n");


// Demonstration of user story 2 and 4:-
// As a customer,
// I want to deposit funds into my account,
// So that I can store my money safe in the bank.
console.log(`=============== Deposit Funds into an account ===============\n`);
console.log("The user can create a Bank Account and Deposit funds into that bank account:");
console.log("User deposited £1000 on 10th January 2012 with Credit Type\n");
let bankAccount = new BankAccount();
user.depositMoney(bankAccount, new Transaction("1000", "10/01/2012", "Credit"));
console.log(BankStatementPrinter.printBankStatement(bankAccount.getTransaction(), bankAccount.getBalance()));
console.log("\n");
console.log("The user can deposit multiple transactions:");
console.log("User deposited £2000 on 13th January 2012 with Credit Type\n");
user.depositMoney(bankAccount, new Transaction("2000", "13/01/2012", "Credit"));
console.log(BankStatementPrinter.printBankStatement(bankAccount.getTransaction(), bankAccount.getBalance()));
console.log("\n");

// Demonstration of user story 3 and 4:-
// As a customer,
// I want to withdraw funds from my account,
// So that I can spend my money.
console.log(`=============== Withdraw Funds from an account ===============\n`);
console.log("The user can Withdraw funds from a bank account:");
console.log("User Withdrawn £500 on 14th January 2012 with Debit Type\n");
user.withdrawMoney(bankAccount, new Transaction("500", "14/01/2012", "Debit"));
console.log(BankStatementPrinter.printBankStatement(bankAccount.getTransaction(), bankAccount.getBalance()));
console.log("\n");

console.log("The user can only Withdraw funds from a bank account with sufficient value amount");
console.log("Therefore user can not Withdraw funds more then the balance. Transaction will not proceed.");
console.log("User Withdrawn £3000 (£500 more than balance) on 15th January 2012 with Debit Type\n");
user.withdrawMoney(bankAccount, new Transaction("3000", "15/01/2012", "Debit"));
console.log(BankStatementPrinter.printBankStatement(bankAccount.getTransaction(), bankAccount.getBalance()));
console.log("Transaction did not proceed\n");
console.log("\n");
