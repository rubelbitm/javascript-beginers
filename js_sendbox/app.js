//lecture 1-2(console & document);
/*document.querySelector('h2').style.color = 'red';

console.time('time :')
  console.log('Hello world');
  console.log(123456);
  console.log(true);
  console.log(['rubel','habib','hasan']);
  console.log({a : 1, b: 2, c: 3});
  var roles = {
    first : 'Admin',
    second : 'Editor',
    third : 'maintinance'
  }

  console.log(roles['first']);
console.timeEnd('time :');

console.table({a : 'hello', b : 'gelo'});
console.warn('This is first warning'); 
console.error('this is an error'); */

//lecture 3 (variable, let, const)

var name = 'rubel';
console.log(name);

var name = 'mahin';
console.log(name);

let age = 17;
console.log(age);

const salary = 18000;
console.log(salary);

//salary = 20000;

const colors = ['red','green','yellow'];
console.log(colors);
colors.push('megento');
console.log(colors);
//colors = ['white','gray']; // its not possible. this constant already define
console.log(colors[1]);
colors[1] = 'cyan';
console.log(colors);

const details = {
  name : 'rubel',
  age : 27,
  education : 'Bsc in computer science'
}

console.log(details);
details.name = 'sabbir';
console.log(details);

 details = {     //its not possible. because this already used.
  name : 'rubel',
  age : 27,
  education : 'Bsc in computer science'
}