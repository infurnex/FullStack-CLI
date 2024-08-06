#!/usr/bin/env node
import util from "util"
import chalk from "chalk";
import fse from "fs-extra";
import { program } from "commander";
import inquirer from "inquirer";
import { reactHandle } from "./Frontend/ReactTemplate.js";
import { exec } from "child_process";
const execCommand = util.promisify(exec);

try {
  program
  .command("frontend")
  .option('-i, --init', "Initating a Project")
  .option('-h, --help', "help option")
  .action(async (arg) => {
    console.log(chalk.cyanBright())
    if(arg.init){
      try{
        const {Type} = await inquirer.prompt({
          name : "Type",
          type : "list",
          message : chalk.green("Select a Frontend Type"),
          choices : [
            "React Vite",
          ]
        })
        if(Type == "React Vite"){
          await execCommand("npm create vite@latest app -- --template react");
          await fse.copy("./app", ".");
          await fse.remove('./app')
          reactHandle();
        }
      }
      catch(e){
        console.log(e);
        usage()
      }
    }
  })
  program.parse(process.argv);

} catch (e) {
  console.log(chalk.yellow(e.message));
  console.log();
  usage();
}

function usage() {
  console.log(`${chalk.whiteBright('tool [CMD]')}
  ${chalk.greenBright('--start')}\tStarts the app
  ${chalk.greenBright('--build')}\tBuilds the app`);
}


// exec(`npm install ${packageName}`, (error, stdout, stderr) => {
//   if (error) {
//       console.error(`Error installing ${packageName}: ${error}`);
//       return;
//   }
//   console.log(`Package ${packageName} has been installed successfully.`);
// });