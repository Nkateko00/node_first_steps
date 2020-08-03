// const figlet = require('figlet');
const chalk = require ('chalk');
const greet = require('./greet');

// const colorMessage = figlet(greet("Teko"));
const colorMsg = chalk.bgYellow.white(greet("Thembi"));
const colorMsgs = chalk.bgBlueBright.white(greet("Zizo"));
console.log(colorMsg,colorMsgs);