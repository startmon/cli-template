To test locally

Installation
Link Your Package Locally: Run this command to create a symlink for your CLI tool:



`npm link`
Run Your CLI: You can run your CLI tool using the command specified in the bin field:

`cli-template`


<!-- To see list of all symlinks -->
`npm list -g --depth=0`



## How the code works??
by default the template has a `index.ts`, that is the starting point for the cli what ever you write will be the output of cli

<!-- How to test in local environment -->
obviously , you have node_modules already after cloning this repo
<br>
in the `package.json`, you ave bin there you have name of the `<name of  the cli (whatever you want)>`

run `npm link <the name of cli>`

congrats! its done
run `npx <name of cli>` or `<name of cli>`

