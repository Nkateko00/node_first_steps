var figlet = require('figlet');
var chalk = require('chalk');
var greet = require('./greet');

// figlet.text(greet("Teko",{
//     font : "Ghost"

// },
// function (err, name) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     const colorMsgs = chalk.bgBlueBright.white(name);
//     console.log(colorMsgs);

// }));

figlet.text(greet("Teko"), {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}, function (err, name) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    const colorMsgs = chalk.bgBlueBright.white(name);
    console.log(colorMsgs);
});