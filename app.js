console.log("Starting app");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const argv = yargs.argv;


const notes = require("./notes.js");

//console.log(process.argv);
var command = process.argv[2];

//console.log(argv);

if(command == 'add'){
	notes.addNote(argv.title, argv.body);
	
}else if(command == 'read'){
	notes.readNote(argv.title);
}

else if(command == 'list'){
	notes.listNotes();
	
}else if(command == 'remove'){
	notes.removeNote(argv.title);
}

