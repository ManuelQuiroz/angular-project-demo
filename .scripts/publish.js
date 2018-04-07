const execSync = require('child_process').execSync;

const { libs } = require('../package.json');

libs.map(lib => {
  const libPath = `${__dirname}/../dist/libs/${lib}`;
  console.log(` [ publish ] ${lib} from ${libPath}`);

  execSync(`cd ${libPath} && npm publish`);
  console.log(` [ publish ] ${lib}: Done`);
});
