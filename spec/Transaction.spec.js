import Transaction from '../src/Transaction.js'

describe("Transaction tests:", () => {
    describe("Transaction Initialisation test ", () => {

        it("Should create a new instance of the Transaction class", () => {
            // Arrange

            // Act
            const testTransaction = new Transaction();
            // Assert
            expect(testTransaction).toBeInstanceOf(Transaction);
        });

        it("Should create new transaction with valid date, value and type", () => {
            // Arrange
            const value = 1234;
            const date = "12/12/2012";
            const type = "Credit";

            // Act
            const transaction = new Transaction(value, date, type);

            // Assert
            expect(transaction.getValue()).toBe(value);
            expect(transaction.getDate()).toBe(date);
            expect(transaction.getType()).toBe(type);
        });
    })


    describe("Transaction getters test ", () => {

        it("Should return the value when 'getValue' is called", () => {
            //Arrange
            const transaction = new Transaction(1500, "12/12/2012", 'Credit');
            //Act
            const actual = transaction.getValue();
            //Assert
            expect(actual).toEqual(1500);
        });

        it("Should return the date when 'getDate' is called", () => {
            //Arrange
            const transaction = new Transaction(1500, "12/12/2012", 'Credit');
            //Act
            const actual = transaction.getDate();
            //Assert
            expect(actual).toEqual("12/12/2012");
        });

        it("Should return the type when 'getType' is called", () => {
            //Arrange
            const transaction = new Transaction(1500, "12/12/2012", 'Credit');
            //Act
            const actual = transaction.getType();
            //Assert
            expect(actual).toEqual("Credit");
        });
    })

})