// File: 2-then.js

function handleResponseFromAPI(promise) {
    promise
        .then((response) => {
            console.log('Got a response from the API');
            return { status: 200, body: 'success' };
        })
        .catch((error) => {
            console.error('Error:', error.message);
            return new Error(); // Returning an empty Error object
        });
}

export default handleResponseFromAPI;
