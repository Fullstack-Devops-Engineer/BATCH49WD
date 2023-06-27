//how to compare two JSON have the same properties without order ?
//a. let obj1={name:"Person 1",age:5};
//b. let obj2={age:5, name:"Person 1"};

//ans:

 let obj1={name:"Person 1",age:5};

 let obj2={age:5,name:"Person 1"};

//  console.log(Object.keys(obj1))   =====> to view the keys of the object

//  console.log(Object.keys(obj2))   =====> to view the keys of the object

//  console.log(Object.values(obj1)) =====> to view the values of the object

//  console.log(Object.values(obj1)) =====> to view the values of the object

 console.log(JSON.stringify(obj1))   // =====> to convert json object to json string

 console.log(JSON.stringify(obj2))   // =====> to convert json object to json string 

