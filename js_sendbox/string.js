var firstName = 'Rubel';
var lastName = 'Ahmed';
var age = 35;
var val;


//concatination
val = firstName + ' ' + lastName;

//appends and escaping
val = 'my name is'+ ' ' + firstName + ' ' + lastName + ' '+'and i\'m'+ ' ' + age + 'year\'s old.'; 

//length
val = firstName.length;

//concat()
val = firstName.concat(' ', lastName);

//change case
val = firstName.toUpperCase();



console.log(val);