const fs = require('fs');

fs.readFile('./fileOne.txt', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

console.log('The last line of the program');
