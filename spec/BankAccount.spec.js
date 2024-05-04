import BankAccount from "../src/BankAccount.js";

describe('BankAccount tests', () => {
    let bankAccount;

    beforeEach(() => {
        bankAccount = new BankAccount();
    });

    afterEach(() => {
        bankAccount = undefined;
    });

    describe('Balance amount tests: ', () => {

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

});