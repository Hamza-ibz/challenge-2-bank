import BankStatementPrinter from "../src/BankStatementPrinter.js";

describe("BankStatementPrinter tests:", () => {
    describe("Transaction Initialisation test ", () => {

        it("Should order transaction array", () => {
            // Arrange

            // Act
            const testTransaction = new Transaction();
            // Assert
            expect(testTransaction).toBeInstanceOf(Transaction);
        });

    })


})