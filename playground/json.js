/* var obj = {
	Name: 'Prabjyot'
	
}
var stringObj = JSON.stringify(obj);

console.log(typeof stringObj);
console.log(stringObj); */

/* var personString = '{"name": "prabjyot", "age": 21}';
var person = JSON.parse(personString);

console.log(typeof person);
console.log(person); */

const fs = require('fs');

var originalNote = {
	title: 'Some Title',
	body: 'Some Body'
};
var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var readNote = fs.readFileSync('notes.json');
var note = JSON.parse(readNote);

console.log(typeof note);
console.log(note);