import User from '../src/User.js';

describe('User tests:', () => {

    describe('login tests', () => {
        it('Correct username and password should give a successfully login, returning true', () => {
            // Arrange
            let user = new User('Hamza', 'Password');
            let username = 'Hamza';
            let password = 'Password';
            let expected = true;

            // Act
            let actual = user.login(username, password);

            // Assert
            expect(actual).toBe(expected);

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