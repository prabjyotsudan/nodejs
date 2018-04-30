console.log("hello from notes.js");
var fs = require('fs');

var addNote = (title, body) => {
	
	var notes = [];
	var note = {
		title,
		body
	};
	
	try{
		var notesString = fs.readFileSync('notes-data.json');
		notes = JSON.parse(notesString);
	}catch(e){
		
	}
	
	var duplicateNotes = notes.filter((note) => note.title === title);
	
	if(duplicateNotes.length === 0){
		notes.push(note);
		fs.writeFileSync('notes-data.json', JSON.stringify(notes));	
	}else{
		console.log('Already Found a note with the same Title');
	}
	
	
};

var listNotes = () => {
	console.log('listing');
};

var removeNote = (title) => {
	console.log('Removing Note: ' + title);
};

var readNote = (title) => {
	console.log('Reading Note: ' + title);
};

module.exports = {
	addNote,
	listNotes,
	removeNote,
	readNote
};