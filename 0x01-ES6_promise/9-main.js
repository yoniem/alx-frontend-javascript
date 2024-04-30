import guardrail from './9-try';
import divideFunction from './8-try';

console.log(guardrail(() => { return divideFunction(10, 2)}));
console.log(guardrail(() => { return divideFunction(10, 0)}));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 9-main.js 
[ 5, 'Guardrail was processed' ]
[ 'Error: cannot divide by 0', 'Guardrail was processed' ]
<<<<<<< HEAD
bob@dylan:~$
=======
bob@dylan:~$ 
>>>>>>> 84e30735e513e2b21600d15f44505d0c840ea956
