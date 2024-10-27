#!/usr/bin/env -S npx tsx

import app from "./app";
import "../env.config"; // Load environment variables from the .env file
import pc from "picocolors"

import { intro, outro, select,log, isCancel } from '@clack/prompts';


async function main(){
  try{
  intro(`${pc.yellow("Express CLI")} started!`)
  const projectType = await select({
    message: 'Pick a project type.',
    options: [
      { value: 'ts', label: 'TypeScript' },
      { value: 'js', label: 'JavaScript' },
      { value: 'coffee', label: 'CoffeeScript', hint: 'oh no' },
    ],
  });
  
  if (isCancel(projectType)){
    log.message('Cancelled 🚫' );
    process.exit(0);
  }
  
  
  log.info(`${ '🚀' } You picked ${projectType}`);
  
  
  // app();

  outro(`Thank You for using ${pc.green("StartMon")}!`)
}catch{
  log.error("Something went wrong!")
  process.exit(1)
}
}



main()
