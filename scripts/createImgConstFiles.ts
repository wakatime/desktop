/**
 * A quick utility file to create a constants file for importing each icon
 * This is designed to be re-ran when new icons are added
 */
const fs = require("fs");
const path = require("path");
const fp = require("lodash/fp");
const _ = require("lodash");

const imgPaths = path.join(__dirname, "..", "src", "imgs");
const constantsFile = path.join(
  __dirname,
  "..",
  "src",
  "constants",
  "imgPaths.ts"
);
const editorIcons = path.join(imgPaths, "editor-icons");

const dir: Array<string> = fs.readdirSync(editorIcons);
const getFileVarName = fp.compose(
  _.camelCase,
  filename =>
    filename
      .split(".")
      .slice(0, -1)
      .join(".")
);

const getFileRelPath = filename => `../imgs/editor-icons/${filename}`;
const importStatements = dir
  .map(
    filename =>
      `import ${getFileVarName(filename)} from "${getFileRelPath(filename)}";`
  )
  .join("\n");
const exportStatements = dir
  .map(
    filename =>
      `export const ${getFileVarName(filename)}Path = ${getFileVarName(
        filename
      )}`
  )
  .join(";\n");
const fileOutput = `${importStatements}

${exportStatements}

`;

if (fs.existsSync(constantsFile)) {
  fs.unlinkSync(constantsFile);
}
fs.writeFileSync(constantsFile, fileOutput, "UTF8");