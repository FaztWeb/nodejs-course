const { readFile, writeFile } = require("fs/promises");

async function read() {
  try {
    const result = await readFile("./data/first.txt", "utf8");
    await writeFile("./data/third.txt", result);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

read();
