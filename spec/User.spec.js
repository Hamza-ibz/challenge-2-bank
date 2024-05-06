import User from '../src/User.js';

describe("User tests:", () => {

    describe("login tests", () => {

        let user;

        beforeEach(() => {
            user = new User("Hamza", "Password");
        });
        afterEach(() => {
            user = undefined;
        });

        it("Correct username and password should give a successfully login, returning true", () => {
            // Arrange
            let username = "Hamza";
            let password = "Password";
            let expected = true;

            // Act
            let actual = user.login(username, password);

            // Assert
            expect(actual).toBe(expected);

        });

        it("Incorrect username and password should give a failed login, returning false", () => {
            // Arrange
            let username = "Tim";
            let password = "DontKnow";
            let expected = false;

            // Act
            let actual = user.login(username, password);

            // Assert
            expect(actual).toBe(expected);

        });

        it("Null username and password should give a failed login, returning false", () => {
            // Arrange
            let username = null;
            let password = null;
            let expected = false;

            // Act
            let actual = user.login(username, password);

            // Assert
            expect(actual).toBe(expected);

        });

    });


    describe("User deposits to a Bank account", () => {

        let user, account, transaction;
        // let bankAccount = new BankAccount();

        beforeEach(() => {
            user = new User("Hamza", "Password");
            account = jasmine.createSpyObj("account", {
                moneyDeposited: []

            });
            transaction = jasmine.createSpyObj("transaction", {
                getType: "Credit"

            });


        });
        afterEach(() => {
            user = undefined;
            account = undefined;
            transaction = undefined;
        });

        it("Check argument for ''depositMoney'', return false if argument is not a 'BankAccount' instance", () => {
            // Arrange
            let expected = false;
            // Act
            let actual = user.depositMoney("bank", transaction);

            // Assert
            expect(expected).toEqual(actual);

        });

        it("Check argument for 'depositMoney', return false if argument is not a 'Transaction' instance", () => {
            // Arrange
            let expected = false;
            // Act
            let actual = user.depositMoney(account, 12345);

            // Assert
            expect(expected).toEqual(actual);

        });

        it("should return true if instance of 'BankAccount' and 'Transaction' are used as arguments", () => {
            // Arrange
            let expected = true;
            // Act
            let actual = user.depositMoney(account, transaction);

            // Assert
            expect(expected).toEqual(actual);

        });

        it("should call the 'BankAccount' 'moneyDeposited' function when user deposit to the Bank account", () => {
            // Arrange

            // Act
            user.depositMoney(account, transaction);

            // Assert
            expect(account.moneyDeposited).toHaveBeenCalled();

        });
    });




    describe("User withdraw from a Bank account", () => {

        let user, account, transaction;
        // let bankAccount = new BankAccount();

        beforeEach(() => {
            user = new User("Hamza", "Password");
            account = jasmine.createSpyObj("account", {
                moneyWithdrawn: []

            });
            transaction = jasmine.createSpyObj("transaction", {
                getType: "Debit"

            });


        });
        afterEach(() => {
            user = undefined;
            account = undefined;
            transaction = undefined;
        });

        // it("Check userAccount is instance of a BankAccount", () => {
        //     // Arrange
        //     // Act
        //     // let actual = user.login(username, password);

        //     // Assert
        //     expect(user.getUserAccount()).toBeInstanceOf(BankAccount);

        // });

        it("Check argument for 'withdrawMoney', return false if argument is not a 'BankAccount' instance", () => {
            // Arrange
            let expected = false;
            // Act
            let actual = user.withdrawMoney("bank", transaction);

            // Assert
            expect(expected).toEqual(actual);

        });

        it("Check argument for 'withdrawMoney', return false if argument is not a 'Transaction' instance", () => {
            // Arrange
            let expected = false;
            // Act
            let actual = user.withdrawMoney(account, 12345);

            // Assert
            expect(expected).toEqual(actual);

        });

        it("should return true if instance of 'BankAccount' and 'Transaction' are used as arguments", () => {
            // Arrange
            let expected = true;
            // Act
            let actual = user.withdrawMoney(account, transaction);

            // Assert
            expect(expected).toEqual(actual);

        });

        it("should call the 'BankAccount' 'moneyWithdrawn' function when user withdraw from the Bank account", () => {
            // Arrange

            // Act
            user.withdrawMoney(account, transaction);

            // Assert
            expect(account.moneyWithdrawn).toHaveBeenCalled();

        });
    });

});
