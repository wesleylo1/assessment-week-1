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
	
	reader.close()

});

