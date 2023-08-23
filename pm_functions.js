const fs = require("fs");

function searchTemplates(template_name = "", templates) {
  if (templates != []) {
    for (let i = 0; i < templates.length; i++) {
      if (
        templates[i]["template-name"].toLowerCase() ===
        template_name.toLocaleLowerCase()
      ) {
        return i;
      }
      i += 1;
    }
  }
  return -1;
}

function createProject(project) {
  createProjectStructure(project["template-name"]);
  project.structure["root-files"].forEach((file) => {
    if (file.content != null) {
      createProjectFile(
        project["template-name"] + "/" + file.name,
        file.content
      );
    } else {
      createProjectFile(project["template-name"] + "/" + file.name);
    }

    project.structure.directories.forEach((dir) => {
      createProjectStructure(project["template-name"] + "/" + dir.name);
      if (dir.files != null) {
        dir.files.forEach((file) => {
          createProjectFile(
            project["template-name"] + "/" + dir.name + "/" + file.name
          );
        });
      }
    });
  });
}

function createProjectStructure(dir_name) {
  fs.mkdir("./" + dir_name, { recursive: true }, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log(dir_name + " directory created");
    }
  });
}

function createProjectFile(file_name, content = []) {
  let fileStream = fs.createWriteStream(file_name);
  if (content != []) {
    content.forEach((con) => {
      fileStream.write(con);
    });
  }
  console.log("File created at: " + file_name);
  fileStream.end();
}
module.exports = {
  createProject,
  searchTemplates,
};
