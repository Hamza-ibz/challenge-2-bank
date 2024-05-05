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
        let transactionDeposit
        beforeEach(() => {
            transactionDeposit = jasmine.createSpyObj("transaction", {
                getValue: 1500
            });
        });

        afterEach(() => {
            transactionDeposit = undefined;
        });

        it("should deposit money by adding the value amount to the balance", () => {
            // Arrange
            let expected = 1500;

            // Act
            bankAccount.moneyDeposited(transactionDeposit);

            // Assert
            expect(bankAccount.getBalance()).toBe(expected);

        });

        it("Increment the transaction array when 'moneyDeposited' successfully", () => {
            // Arrange
            let expected = 1;

            // Act
            bankAccount.moneyDeposited(transactionDeposit);

            // Assert
            expect(bankAccount.getTransaction().length).toEqual(expected);

        });

        it("Should insert the 'transaction' into the transaction array when 'moneyDeposited' successfully", () => {
            // Arrange
            let expected = transactionDeposit;

            // Act
            bankAccount.moneyDeposited(transactionDeposit);
            let actual = bankAccount.getTransaction()[0];

            // Assert
            expect(actual).toBe(expected);
        });

        it("Insert multiple 'transaction' into the transaction array", () => {
            //Arrange
            let transaction2 = jasmine.createSpyObj("transaction2", {
                getValue: 1500
            });
            let expected = 2;

            //act
            bankAccount.moneyDeposited(transactionDeposit);
            bankAccount.moneyDeposited(transaction2);
            let actual = bankAccount.getTransaction().length;

            //Assert
            expect(actual).toBe(expected);

        });

        it("Increase in balance when multiple 'transactions' are deposited when 'moneyDeposited' function is called", () => {
            //Arrange
            let transaction2 = jasmine.createSpyObj("transaction2", {
                getValue: 1500
            });
            let expected = 3000;

            //act
            bankAccount.moneyDeposited(transactionDeposit);
            bankAccount.moneyDeposited(transaction2);
            let actual = bankAccount.getBalance();

            //Assert
            expect(actual).toBe(expected);

        });


        it("Should not effect 'Balance' if the value amount of 'moneyDeposited' is negative", () => {
            // Arrange
            let transactionNegative = jasmine.createSpyObj("transaction2", {
                getValue: -50
            });
            let expected = 0.0;

            // Act
            bankAccount.moneyDeposited(transactionNegative);

            let actual = bankAccount.getBalance();

            // Assert
            expect(actual).toBe(expected);
        });

        it("Should not effect 'transaction' array if the value amount of 'moneyDeposited' is negative", () => {
            // Arrange
            let transactionNegative = jasmine.createSpyObj("transaction2", {
                getValue: -50
            });
            let expected = 0;

            // Act
            bankAccount.moneyDeposited(transactionNegative);

            let actual = bankAccount.getTransaction().length;

            // Assert
            expect(actual).toEqual(expected);
        });

        it("Should not effect 'transaction' array if the value amount of 'moneyDeposited' is not a number", () => {
            // Arrange
            let transactionNotNumber = jasmine.createSpyObj("transaction2", {
                getValue: 'not number'
            });
            let expected = 0;

            // Act
            bankAccount.moneyDeposited(transactionNotNumber);

            let actual = bankAccount.getTransaction().length;

            // Assert
            expect(actual).toEqual(expected);
        });

        it("Should not effect 'Balance' if the value amount of 'moneyDeposited' is not a number", () => {
            // Arrange
            let transactionNotNumber = jasmine.createSpyObj("transaction2", {
                getValue: 'not number'
            });
            let expected = 0.0;

            // Act
            bankAccount.moneyDeposited(transactionNotNumber);

            let actual = bankAccount.getBalance();

            // Assert
            expect(actual).toBe(expected);
        });

        it("Check argument for 'moneyDeposited', no effect on 'Balance' if argument is not a 'Transaction' instance", () => {
            // Arrange
            let expected = 0.0;

            // Act
            bankAccount.moneyDeposited('Not transaction instance');

            let actual = bankAccount.getBalance();

            // Assert
            expect(actual).toBe(expected);

        });

        it("Check argument for 'moneyDeposited', no effect on 'transaction' array if argument is not a 'Transaction' instance", () => {
            // Arrange
            let expected = 0;

            // Act
            bankAccount.moneyDeposited('Not transaction instance');

            let actual = bankAccount.getTransaction().length;

            // Assert
            expect(actual).toEqual(expected);

        });


    });

    describe("'moneyWithdrawn' tests: ", () => {
        let transactionDeposit, transactionWithdraw
        beforeEach(() => {
            transactionDeposit = jasmine.createSpyObj("transaction", {
                getValue: 1500
            });
            bankAccount.moneyDeposited(transactionDeposit);
            transactionWithdraw = jasmine.createSpyObj("transaction", {
                getValue: 500
            });
        });

        afterEach(() => {
            transactionDeposit = undefined;
            transactionWithdraw = undefined;
        });

        it("should Withdraw money by reducing the value amount from the balance", () => {
            // Arrange
            let expected = 1000;

            // Act
            bankAccount.moneyWithdrawn(transactionWithdraw);

            // Assert
            expect(bankAccount.getBalance()).toBe(expected);

        });

        it("Increment the transaction array when 'moneyWithdrawn' successfully", () => {
            // Arrange
            let expected = 2; // used 'moneyDeposited' function (in BeforeEach) which means transaction array has 1 length 

            // Act
            bankAccount.moneyWithdrawn(transactionWithdraw);

            // Assert
            expect(bankAccount.getTransaction().length).toEqual(expected);

        });

        it("Should insert the 'transaction' into the transaction array when 'moneyWithdrawn' successfully", () => {
            // Arrange
            let expected = transactionWithdraw;

            // Act
            bankAccount.moneyWithdrawn(transactionWithdraw);

            // Assert
            expect(bankAccount.getTransaction()[1]).toBe(expected);
        });

        it("Insert multiple 'moneyWithdrawn' 'transaction' into the transaction array", () => {
            //Arrange
            let transactionWithdraw2 = jasmine.createSpyObj("transaction2", {
                getValue: 250
            });
            let expected = 3;

            //Act
            bankAccount.moneyWithdrawn(transactionWithdraw);
            bankAccount.moneyWithdrawn(transactionWithdraw2);
            let actual = bankAccount.getTransaction().length;

            //Assert
            expect(actual).toBe(expected);

        });

        it("Decrease in balance when multiple 'transactions' are Withdrawn when 'moneyWithdrawn' function is called", () => {
            //Arrange
            let transactionWithdraw2 = jasmine.createSpyObj("transaction2", {
                getValue: 1000
            });
            let expected = 0;

            //act
            bankAccount.moneyWithdrawn(transactionWithdraw);
            bankAccount.moneyWithdrawn(transactionWithdraw2);
            let actual = bankAccount.getBalance();

            //Assert
            expect(actual).toBe(expected);

        });


        it("Should not effect 'Balance' if the value amount of 'moneyWithdrawn' is negative", () => {
            // Arrange
            let transactionNegative = jasmine.createSpyObj("transactionNegative", {
                getValue: -50
            });
            let expected = 1500;

            // Act
            bankAccount.moneyWithdrawn(transactionNegative);

            let actual = bankAccount.getBalance();

            // Assert
            expect(actual).toBe(expected);
        });

        it("Should not effect 'transaction' array if the value amount of 'moneyWithdrawn' is negative", () => {
            // Arrange
            let transactionNegative = jasmine.createSpyObj("transactionNegative", {
                getValue: -50
            });
            let expected = 1;

            // Act
            bankAccount.moneyWithdrawn(transactionNegative);

            let actual = bankAccount.getTransaction().length;

            // Assert
            expect(actual).toEqual(expected);
        });

        it("Should not effect 'transaction' array if the value amount of 'moneyWithdrawn' is not a number", () => {
            // Arrange
            let transactionNotNumber = jasmine.createSpyObj("transactionNotNumber", {
                getValue: 'not number'
            });
            let expected = 1;

            // Act
            bankAccount.moneyWithdrawn(transactionNotNumber);

            let actual = bankAccount.getTransaction().length;

            // Assert
            expect(actual).toEqual(expected);
        });

        it("Should not effect 'Balance' if the value amount of 'moneyWithdrawn' is not a number", () => {
            // Arrange
            let transactionNotNumber = jasmine.createSpyObj("transactionNotNumber", {
                getValue: 'not number'
            });
            let expected = 1500;

            // Act
            bankAccount.moneyWithdrawn(transactionNotNumber);

            let actual = bankAccount.getBalance();

            // Assert
            expect(actual).toBe(expected);
        });

        it("Check argument for 'moneyWithdrawn', no effect on 'Balance' if argument is not a 'Transaction' instance", () => {
            // Arrange
            let expected = 1500;

            // Act
            bankAccount.moneyWithdrawn('Not transaction instance');

            let actual = bankAccount.getBalance();

            // Assert
            expect(actual).toBe(expected);

        });

        it("Should not effect 'Balance' if the value amount of 'moneyWithdrawn' exceeds account 'Balance'", () => {
            // Arrange
            let transactionWithdrawTooMuch = jasmine.createSpyObj("transactionWithdrawTooMuch", {
                getValue: 2500
            });
            let expected = 1500;

            // Act
            bankAccount.moneyWithdrawn(transactionWithdrawTooMuch);

            let actual = bankAccount.getBalance();

            // Assert
            expect(actual).toEqual(expected);

        });

    });

});