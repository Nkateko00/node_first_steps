var figlet = require('figlet');
 
figlet('Goodnight Teko!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        var sam = "text";
        return;
    }
    console.log(data)
});