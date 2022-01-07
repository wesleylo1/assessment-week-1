// Welcome the user to the password validator tool

// Prompt the user for a password to validate

// Check if the user’s password meets the following constraint:

// At least 10 characters long

// If the user’s password meets the constraint, show a success message to the user

// If the user’s password fails the constraint, show a failure message to the user

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


console.log('Welcome to the password validator tool!')

reader.question("Now...what is the password?", function(input){
	tokens = input.split(' ');
	
	let password = tokens[0];
	

if (password.length >= 10) {
    console.log('success')
} else {
    console.log('failure')
}
	//This line closes the connection to the command line interface.
	reader.close()

});

