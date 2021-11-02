let objArray = [
 {
    // age : 9,
    gender:'male', 
    firstName: 'John',
    lastName: 'Smith',
},
{
    //age : 10,
    gender:'male',
    firstName: 'Demola',
    lastName: 'Femi',
},
{
   // age : 9,
    gender:'female',
    firstName: 'Tife',
    lastName: 'Harry,',
}
];
// let question1 = "Using Array method forEach, print out the firstName"

// let question2 = "Using Array method map, print out a new key fullname"
// "per object and the value would be the combination of"
// "the firstName and lastName"

// "Checkout Array.prototype.map on MDN Docs"

//let question3 = Using Array method filter, return an array containing"
// "object with gender male"

//let question4 = "Do question3 above for object with gender female"

//Q1
function e(printFirstname){
    console.log(printFirstname.firstName)
}
objArray.forEach(e)

//Q2
function mapMethod (methodMap) {
   let firstLast = {fullName: methodMap.firstName + " " + methodMap.lastName};
   return firstLast;
}
console.log(objArray.map(mapMethod));
//let newKeyFullname = objArray.map(person => ({fullName: person.firstName + " " + person.lastName}));
//console.log(newKeyFullname);
//objArray.forEach( (e) => {console.log(`($e.firstName))`}

//question3
function ArrayFilterMale(conMale){
    return conMale.gender === "male"
}
console.log(objArray.filter(ArrayFilterMale))

//Q4
function ArrayFilterFemale(conFemale){
    return conFemale.gender === "female"
}
console.log(objArray.filter(ArrayFilterFemale))

//Question5 "Create a new key age per object, the value of age per object is"
// "equilvalent to the total sum of both the firstName and lastName"
// Q5
function agePerObj(ageObj){
    ageObj["age"] = ageObj.firstName.length + ageObj.lastName.length;
}
objArray.map(agePerObj)
console.log(objArray)