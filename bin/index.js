#! /usr/bin/env node
const { program } = require("commander");
const create = require("./create");
const list = require("./list");

program
  .command("create <template_name>")
  .description("Create project from specified template")
  .action(create);

program.command("list").description("List all templates").action(list);
program.parse();
