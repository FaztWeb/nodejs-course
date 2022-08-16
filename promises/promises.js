const { readFile } = require("fs");

const getText = (pathFile) => {
  return new Promise((resolve, rejext) => {
    readFile(pathFile, "utf8", (err, data) => {
      if (err) {
        rejext(err);
      } else {
        resolve(data);
      }
    });
  });
};

getText("./data/first.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
