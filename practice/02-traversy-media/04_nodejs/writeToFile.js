const fs = require("fs");
const path = require("path");

class Messages {
  // constructor(id, msg) {
  //   this.id = id;
  //   this.msg = msg;
  // }

  write(id, msg) {
    fs.writeFile(
      path.join(__dirname, "messages.txt"),
      `${id}: ${msg}`,
      (err) => {
        if (err) throw err;

        console.log("message saved!");
      }
    );
  }
}

module.exports = Messages;
