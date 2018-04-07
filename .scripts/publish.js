const execSync = require('child_process').execSync;

const { libs } = require('../package.json');

libs.map(lib => {
  const libPath = `${__dirname}/../dist/libs/${lib}`;
  execSync(`cd ${libPath} && npm publish`);
});
