// const { chalk } = import("chalk").then((m) => m.default);
// const { conf } = new (require("conf"))();
const { createProject, searchTemplates } = require("../pm_functions");

function create(template_name) {
  const project_templates = require("../project-template.json");
  let searchResults = searchTemplates(template_name, project_templates);
  if (searchResults != -1) {
    createProject(project_templates[searchResults]);
  } else {
    console.log("Template not found");
  }
}

module.exports = create;
