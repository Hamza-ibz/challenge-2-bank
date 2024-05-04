import BankAccount from '../src/BankAccount.js';
import User from '../src/User.js';

describe('User tests:', () => {

    describe('login tests', () => {

        let user;

        beforeEach(() => {
            user = new User("Hamza", "Password");
        });
        afterEach(() => {
            user = undefined;
        });

        it('Correct username and password should give a successfully login, returning true', () => {
            // Arrange
            let username = 'Hamza';
            let password = 'Password';
            let expected = true;

            // Act
            let actual = user.login(username, password);

            // Assert
            expect(actual).toBe(expected);

        });

        it('Incorrect username and password should give a failed login, returning false', () => {
            // Arrange
            let username = 'Tim';
            let password = 'DontKnow';
            let expected = false;

            // Act
            let actual = user.login(username, password);

            // Assert
            expect(actual).toBe(expected);

        });

        it('Null username and password should give a failed login, returning false', () => {
            // Arrange
            let username = null;
            let password = null;
            let expected = false;

            // Act
            let actual = user.login(username, password);

            // Assert
            expect(actual).toBe(expected);

        });

        it('Null username and password should give a failed login, returning false', () => {
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


    describe('User deposits to an account', () => {

        let testWallet, testCard, user, account;
        let bankAccount = new BankAccount();

        beforeEach(() => {
            user = new User("Hamza", "Password", bankAccount);
            account = jasmine.createSpyObj("account", {
                moneyDeposited: [],
            });
        });
        afterEach(() => {
            user = undefined;
        });

        it('Check userAccount is instance of a BankAccount', () => {
            // Arrange
            // let user = new User("Hamza", "Password", new BankAccount());

            // Act
            // let actual = user.login(username, password);

            // Assert
            expect(user.getUserAccount()).toBeInstanceOf(BankAccount);

        });

        it('should call the BankAccount moneyDeposited function when user deposit to the Bank account', () => {
            // Arrange

            // Act
            user.depositMoney(account);

            // Assert
            expect(account.moneyDeposited).toHaveBeenCalled();

        });
    });


});


// User test

// test login:-
// correct details return true
// incorrect details return false

// test deposit Money:-
// increase balance 
// date input in correct format
// positive value to deposit
// has type debit

// test withdraw
// decrease balance 
// date input in correct format
// positive value to deposit
// has type debit