let arrayObject = [
    {
        id : 3,
        firstName: "Saheed",
        lastName: "Adesuwa"
    },

    {
        id : 2,
        firstName: "Yetunde",
        lastName: "Ahmad"
    },

    {
        id : 1,
        firstName: "Goodnews",
        lastName: "Confidence"
    },

    {
        id : 4,
        firstName: "Gideon",
        lastName: "Mojoyin"
    }
];
function newArrays(arrayObject){
for(let i = 0; i < arrayObject.length; i++){
    arrayObject[i].fullName = arrayObject[i].firstName + " " + arrayObject[i].lastName;
    arrayObject[i].email = arrayObject[i].firstName + "@semicolon.africa";
    arrayObject[i].nickname = arrayObject[i].firstName.charAt(0) + arrayObject[i].lastName.charAt(0);
}
return arrayObject;
}
    
console.log(newArrays(arrayObject));