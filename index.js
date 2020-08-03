const { fork } = require('child_process');
const childProcess = fork('Task.js', { execArgv: [`--inspect-brk=12345`] });

childProcess.on('message', (message) => {
  console.log(message);
});
