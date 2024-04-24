// File: 0-promise.js

function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Your asynchronous operation here
        // For example:
        setTimeout(() => {
            resolve('Response from API');
        }, 1000);
    });
}

export default getResponseFromAPI;
