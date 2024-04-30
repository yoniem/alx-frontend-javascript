import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 1-main.js 
Promise { { status: 200, body: 'Success' } }
Promise {
  <rejected> Error: The fake API is not working currently
    ...
    ...
<<<<<<< HEAD
bob@dylan:~$
=======
bob@dylan:~$ 
>>>>>>> 84e30735e513e2b21600d15f44505d0c840ea956
