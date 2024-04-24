// File: 4-user-promise.js

function signUpUser(firstName, lastName) {
    return new Promise((resolve, reject) => {
        resolve({ firstName, lastName });
    });
}

export default signUpUser;
