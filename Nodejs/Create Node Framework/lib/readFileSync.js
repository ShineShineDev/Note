/**
  * require file system module
*/
const fs = require('fs');

// exports
 exports.getData = (filePath) => {
    return fs.readFileSync(filePath);
}
