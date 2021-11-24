function Commanman(firstName,lastName,dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.birthDay= new Date(dob);
    // this.calAge = function(){
    //     const diff= Date.now() - this.birthDay.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear()-1970);
    // }
    // this.age=this.calAge();
}

Commanman.prototype.calAge =function(){
  const diff=Date.now()-this.birthDay.getTime();
  const ageDate=new Date(diff);
  return Math.abs(ageDate.getUTCFullYear()-1970);
}

const Adi = new Commanman('Aditya','Yadav','10-27-1999');
console.log(Adi);
console.log(Adi.calAge());

// array.forEach(element => {
  
// });

// const adi=new Function ('x','y','return x+y');
// console.log(adi(2,103));


// // String

// const name1 = 'Jeff';
// const name2 = new String('Jeff');

// //name2.foo = 'bar';
// // console.log(name2);

// console.log(typeof name2);

// if(name2 === 'Jeff'){
//   console.log('YES');
// } else {
//   console.log('NO');
// }

// // Number
// const num1 = 5;
// const num2 = new Number(5);

// // Boolean
// const bool1 = true;
// const bool2 = new Boolean(true);

// // Function
// const getSum1 = function(x, y){
//   return x + y;
// }

// const getSum2 = new Function('x','y', 'return x + y');

// // Object
// const john1 = {name: "John"};
// const john2 = new Object({name: "John"});
// console.log(john2);

// // Arrays
// const arr1 = [1,2,3,4];
// const arr2 = new Array(1,2,3,4);

// // Regular Expressions
// const re1 = /\w+/;
// const re2 = new RegExp('\\w+');

// console.log(re2);