let arrayObject = [
    {id : 3,
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
//ascending of an Array Object
arrayObject.sort(function(a, b) {return parseInt(a.id) - parseInt(b.id)});
console.log(arrayObject)

//descending of an Array Object
arrayObject.sort(function(a, b) {return parseInt(b.id) - parseInt(a.id)});
console.log(arrayObject)