const project_templates = require("../project-template.json");

function list() {
  project_templates.forEach((template) => {
    console.log(template["template-name"]);
  });
}

module.exports = list;
