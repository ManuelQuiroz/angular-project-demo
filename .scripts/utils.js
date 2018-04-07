const fs = require('fs');

const readFile = file => {
  return fs.readFileSync(file)
};

const writeFile = (file, data) => {
  return fs.writeFileSync(file, data)
};

const patchVersion = (file, version) => {
  console.log(`patchVersion: set ${version} in ${file}`);

  const curObj = JSON.parse(readFile(file));
  const newObj = Object.assign({}, curObj, { version });


  writeFile(file, JSON.stringify(newObj, null, 2) + "\n");

  console.log(JSON.stringify(curObj, null, 2));
  console.log(JSON.stringify(newObj, null, 2));

  console.log('done');
};

module.exports = {
  readFile,
  patchVersion,
};
