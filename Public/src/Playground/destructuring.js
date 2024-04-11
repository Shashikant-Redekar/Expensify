//ES6 Object destructuring

const person = {
    name: 'Shashikant',
    age : 26,
    location :{
        city:'Pune',
        temp: 23
    }
};

const { name: firstName = 'Anonymus', age } = person; //ES6 destructuring. and giving default value to name. and renaming name to firstName.
const { city, temp: temprature } = person.location; //temp remaned to temprature.

// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age}.`);

console.log(`It's ${temprature} in ${city}.`);

//ES6 Array Destructuring.

const address = ['1299 S Junioer street', 'Pune', 'India', '411031'];

const [, city1, country='USA' ] = address;  // first , to skip first index and last to ignore, variable name can be anything and default for country.

console.log(`You are in ${city1} ${country}.`);