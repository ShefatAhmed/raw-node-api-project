const fs = require("fs");
const path = require("path");
const lib = {};
lib.baseDir = path.join(__dirname, "../.data/");
lib.create = (dir, file, data, callback) => {
  fs.open(
    `${lib.baseDir + dir}/${file}.json`,
    "wx",
    (err, fileDescriptor) => {
      if (!err && fileDescriptor) {
        const stringData = JSON.stringify(data);
        fs.writeFile(fileDescriptor, stringData, (err2) => {
          if (!err2) {
            fs.close(fileDescriptor, (err3) => {
              if (!err3) {
                callback(false);
              } else {
                callback("Error closing the new file");
              }
            });
          } else {
            callback("Error writing to new file");
          }
        });
      } else {
        callback("Could not create new file, it may already exist");
      }
    }
  );
};

module.exports = lib;