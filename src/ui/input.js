import terminalKit from 'terminal-kit';
const term = terminalKit.terminal;

/*term.grabInput({
  mouse: 'motion'
});*/

term.on('mouse', (name, data) => {
  // console.log(name, data);
});