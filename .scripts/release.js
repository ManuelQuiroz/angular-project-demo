const { patchVersion, readFile } = require('./utils');

const { libs, version } = require('../package');

console.log(`Target version: ${version}`);
console.log('Libs defined: ', libs);

libs.forEach(lib => {
  console.log(` [ lib ] ${lib}`);
  console.log(__dirname)
  const filePath = `${__dirname}/../libs/${lib}/package.json`;
  const pjson = readFile(filePath);
  const libVersion = pjson.version;

  patchVersion(filePath, version);

  console.log(` [ lib ] ${lib}: Setting to ${version} from ${libVersion}`);
})

