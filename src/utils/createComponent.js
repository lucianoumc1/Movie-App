const fs = require("fs");
const NAME = process.argv[2];

function createComponent(componentName) {
  const dataIndex = `import "./${componentName}.css";

  export default function ${componentName}() {
    return <div className="${componentName}">${componentName}</div>;
  }`;
  const dataCss = `.${componentName}{
  }
  `;

  fs.mkdir(componentName, (err) => {
    if (err) throw err;
    fs.writeFile(`${componentName}/index.jsx`, dataIndex, (err) => {
      if (err) throw err;
      console.log("file is created");
    });
    fs.writeFile(`${componentName}/componentName.css`, dataCss, (err) => {
      if (err) throw err;
      console.log("file is created");
    });
  });
}

createComponent(NAME);
