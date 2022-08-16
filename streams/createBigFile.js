const { writeFile } = require("fs/promises");

const createBigFile = async () => {
  await writeFile("bigFile.txt", "Hello World".repeat(1000000));
};

createBigFile();
