//these are the objects//
const person1 = {firstName: "John", lastName:"Doe", age:50, eyeColor:"blue", 
gender:"male"};
const person2 = {firstName: "Jane", lastName:"Doe", age:40, eyeColor:"brown", 
gender:"female"};
const person3 = {firstName: "Janet", lastName:"Doe", age:10, eyeColor:"Blue", 
gender:"female"};
const person4 = {firstName: "Jack", lastName:"Doe", age:8, eyeColor:"brown", 
gender:"male"};
const person5 = {firstName: "June", lastName:"Doe", age:6, eyeColor:"brown", 
gender:"female"};


//this is the array//
let family = [
    {firstname: "John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue", 
    gender:"male"},
    
    {firstname: "Jane", 
    lastName:"Doe", 
    age:40, 
    eyeColor:"brown", 
    gender:"female"},
    
    {firstname: "Janet", 
    lastName:"Doe", 
    age:10, 
    eyeColor:"Blue", 
    gender:"female"},
    
    {firstname: "Jack", 
    lastName:"Doe", 
    age:8, 
    eyeColor:"brown", 
    gender:"male"},

    {firstname: "June", 
    lastName:"Doe", 
    age:6, 
    eyeColor:"brown", 
    gender:"female"}
    ];

//array methods//
let kids = family.filter(element => {
    return element.age <= 18;
});

console.log("There are " + family.length + 
" people in the " + person1.lastName + " family.");

console.log(kids.length + " members of the family are children.")

//Object Methods
let dad = Object.values(person1);
let mom = Object.values(person2);

console.log(dad[0] + " is the Dad and " + mom[0] 
+ " is the mom.");
console.log("The children are "+person3.firstName +", " 
+person4.firstName + ", and "
+ person5.firstName);