const add = require('./app');

if (add(20, 30) === 50) {
    console.log('Test Passed'); 
    process.exit(0);
} else {
    console.log('Test Failed!');
    process.exit(1);
}
