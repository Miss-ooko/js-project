//types of datatypes in javascript

//strings
First_Name="ooko";//underscore naming
lastName="bill";//carmel casing
const address="sunset bouliverd 22";

const occupation="software developer";
const NetSalary="50,000";//upper case naming

console.log(address );
console.log(typeof(address));

//number
x=50;
const Salary=5000.00;

let age=40;

console.log(age);
console.log(typeof(age));

//bolean-true/false
isMarried=true;
isRich=false;

console.log(isMarried);

//null
const height=null;
console.log(height);

//undefined
let gender=undefined;
let salary=undefined;
console.log(gender);

//objects
const bio_data={
    First_Name:"bill",
    lastName:"otunga",
    age:30,
    netpay:400.00,
    isEmployed:true,
    isMarried:true,
    personal_data:{
        isRich:true,
        hasKids:false,
        hasHouses:true,
    },

};
console.log(bio_data);

//arrays
const numbers=[
    "bill",30,null,undefined,bio_data,true,50000.00
];
console.log(numbers);
