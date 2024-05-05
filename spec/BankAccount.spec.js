import BankAccount from "../src/BankAccount.js";

describe("BankAccount tests", () => {
    let bankAccount;

    beforeEach(() => {
        bankAccount = new BankAccount();
    });

    afterEach(() => {
        bankAccount = undefined;
    });

    describe("Balance amount tests:", () => {

        it("Should return the value amount of balance property", () => {
            //Arrange
            let expected = 0.0;
            //Act
            let actual = bankAccount.getBalance();
            //Assert
            expect(actual).toBe(expected);


        });

        it("should have a balance property that is initialized to 0.0", () => {
            //Arrange
            let expected = 0.0;
            //Act
            let actual = bankAccount.getBalance();
            //Assert
            expect(actual).toBe(expected);


        });
    });

    describe("'moneyDeposited' tests: ", () => {
        let transaction
        beforeEach(() => {
            transaction = jasmine.createSpyObj("transaction", {
                getValue: 1500
            });
        });

        afterEach(() => {
            transaction = undefined;
        });

        it("should deposit money by adding the value amount to the balance", () => {
            // Arrange
            let expected = 1500;

            // Act
            bankAccount.moneyDeposited(transaction);

            // Assert
            expect(bankAccount.getBalance()).toBe(expected);

        });

        it("Increment the transaction array when 'moneyDeposited' successfully", () => {
            // Arrange
            let expected = 1;

            // Act
            bankAccount.moneyDeposited(transaction);

            // Assert
            expect(bankAccount.getTransaction().length).toEqual(expected);

        });

        it("Should insert the 'transaction' into the transaction array when 'moneyDeposited' successfully", () => {
            // Arrange
            let expected = transaction;

            // Act
            bankAccount.moneyDeposited(transaction);

            // Assert
            expect(bankAccount.getTransaction()[0]).toBe(expected);
        });



    });

});