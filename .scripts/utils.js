const fs = require('fs');

const getProjectFilePath = file => [__dirname, '..', file].join('/');

const readFile = (file) => fs.readFileSync(file)

const writeFile = (file, data) => fs.writeFileSync(file, data)

const readProjectFile = (file, parse = false) => {
  const contents = readFile(getProjectFilePath(file));
  return parse ? JSON.parse(contents) : contents;
};

const writeProjectFile = (file, data, stringify = false) => {
  const contents = stringify ? JSON.stringify(data, null, 2) + "\n" : data;
  return writeFile(getProjectFilePath(file), contents);
};

const patchLibDependencies = (libs, libName, version) => {

  libs.forEach(lib => {
    const libsPath = `libs/${lib}/package.json`;
    const libConfig = readProjectFile(libsPath, true);

    // Get the dependencies
    const dependencies = libConfig.dependencies || {};

    // Filter in the ones that we need to update
    const updatedDeps = Object.keys(dependencies)
      .filter(dependency => dependency === libName);

    // Update any dependencies
    if (updatedDeps.length) {
      // For each of the items in this array
      updatedDeps.forEach(updateDep => {
        // We simply set the version to the key
        libConfig.dependencies[updateDep] = version
      });
      // And we write the contents back to the file
      writeProjectFile(libsPath, libConfig, true)
      console.log(` [ release ] patchLibDependencies: set ${libName}@${version} in ${lib}`);
    }
  })
};

const patchLibVersion = (lib, version) => {
  const libsPath = `libs/${lib}/package.json`;
  const libConfig = readProjectFile(libsPath, true);

  const newConfig = Object.assign({}, libConfig, { version });

  writeProjectFile(libsPath, newConfig, true)
  console.log(` [ release ] patchLibVersion: set ${version}`);
};

const getAngularCli = () => {
  const angularCliPath = `${__dirname}/../.angular-cli.json`;
  return JSON.parse(readFile(angularCliPath));
}

const getLibs = () => {
  const angularCli = getAngularCli()

  // Get the array of apps defined in the Angular CLI
  const { apps } = angularCli;

  // If the app root starts with `libs/` we consider it a lib
  return apps
    .filter(lib => lib.root.indexOf('libs/') === 0)
    .map(lib => lib.name);
};

const getScope = () => {
  const angularCli = getAngularCli();

  // Get the array of apps defined in the Angular CLI
  const { project } = angularCli;

  // If the app root starts with `libs/` we consider it a lib
  return project.npmScope || '@npmScope-undefined'
};


module.exports = {
  readFile,
  patchLibVersion,
  patchLibDependencies,
  getLibs,
  getScope,
};
