let object=[
    {"person":"John","age":30,"company":"Google"},
    {"person":"Mohn","age":37,"company":"Flipkart"},
    {"person":"Kohn","age":38,"company":"Amazon"},
    {"person":"Sohan","age":40,"company":"Myntra"},
    {"person":"Jenny","age":70,"company":"Apple"},
]

console.log("iterating through for loop")
let n = object.length
for(let i=0;i<n;i++){
    console.log(object[i].person,object[i].age,object[i].company)
}

console.log("iterating through for-in loop")
for(let i in object){
    console.log(object[i].person,object[i].age,object[i].company)
}

console.log("iterating through for-of loop")
for(let i of object){
    console.log(i.person,i.age,i.company)
}

console.log("iterating through forEach loop")
object.forEach(function(obj){
    console.log(obj.person,obj.age,obj.company)
})

console.log("created my resume data in JSON Format")
let obj = {
    "FirstName" : "Thakur",
    "LastName" : "Rohith",
    "Age" : 23,
    "Sex" : "Male",
    "PhoneNumber" : "7901427367",
    "EmailId" : "rohithsinghthakur3@gmail.com",
    "BTech" : "Anurag Group of Institutions",
    "CGPA" : 8.79,
    "Projects": [
        "Vehicle accident detection system",
        "Smart shoe for blind people",
        "Color Game project",
        "Tourist place application",
        "What\'s app clone"
    ],
    "Hobbies": [
        "Watching movies and web-series",
        "outing with my family",
        "cooking and serving to my family",
        "listing to songs"
    ],
    "Location" : "Hyderabad"
}
let jsonObj=JSON.stringify(obj)
console.log(jsonObj);
