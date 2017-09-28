const fs = require('fs');
const path = require('path');

const WriteFile = (file,data,options,callback) => {
  fs.writeFile(
    file,
    data,
    options,
    callback == null ? (err) => {
      if(err) {
        console.error(err);
      } else {
        console.log('写入成功');
      }
    } : callback
  );
};

module.exports = {
  WriteFile
};

