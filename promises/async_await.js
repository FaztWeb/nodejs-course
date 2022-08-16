
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

async function read() {
  try {
    const result = await getText("./data/first.txt");
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

read();
