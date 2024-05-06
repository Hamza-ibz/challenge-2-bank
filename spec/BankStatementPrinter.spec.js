import BankStatementPrinter from "../src/BankStatementPrinter.js";
import chalk from "chalk";

describe("BankStatementPrinter tests:", () => {
    describe("BankStatementPrinter print and format test ", () => {

        it("should print a row of data in green correctly for Credit type", () => {
            //Arrange    
            const transactionCredit = jasmine.createSpyObj("transactionCredit", {
                getDate: "09/12/2021",
                getType: "Credit",
                getValue: 5000
            });

            //Act
            const actual = BankStatementPrinter.creditPrint(transactionCredit, 4000);

            //Assert
            expect(actual).toContain(chalk.green("09/12/2021 || 5000.00 ||        || 4000.00"));
        });

        it("The valueFormat() method should have the capability to format value to two decimal places.", () => {
            //Arrange
            const expected = 754.00;

            //Act
            const value = 754;
            const actual = BankStatementPrinter.valueFormat(value);

            //Assert
            expect(actual).toBe("754.00");
        });

        it("should print a row of data in red correctly for Debit type", () => {
            //Arrange    
            const transactionDebit = jasmine.createSpyObj("transactionDebit", {
                getDate: "29/07/2020",
                getType: "Debit",
                getValue: 200
            });

            //Act
            const actual = BankStatementPrinter.debitPrint(transactionDebit, 1000);

            //Assert
            expect(actual).toContain(chalk.red("29/07/2020 ||         || 200.00 || 1000.00"));
        });
    })


})