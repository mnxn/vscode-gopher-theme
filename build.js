const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const standard = fs.readFileSync(
	path.join(__dirname, "src", "gopher-theme.yml"),
	"utf8"
);

const jsonData = JSON.stringify(yaml.load(standard), null, 4);

fs.writeFileSync(path.join(__dirname, "themes", "gopher-theme.json"), jsonData);
