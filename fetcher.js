const request = require('request');
const process = require('process');
const fs = require('fs');

const userInput = process.argv;
const urlAddress = userInput[2];
const localFilePath = userInput[3];

request(urlAddress, (error, response, body) => {
  
  fs.writeFile(localFilePath, body, error => {
    if (error) {
      console.error(error);
    }
    fs.stat(localFilePath, (err, fileStats) => {
      if (err) {
        console.log(err);
      } else {
        let fileSize = fileStats.size;
        console.log(`Downloaded and saved ${fileSize} bytes to ./index.html`);
      }
    });
  });
});

