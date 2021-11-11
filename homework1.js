//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    for (let i = 0; i< dog_names.length; i++){
        if (dog_string.includes(dog_names[i])){
            console.log('Matched dog_name')
        }else{
            console.log('No Matches')
        }
    }
}
findWords()
//Call method here with parameters
//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(){
    for (let i=0; i<arr.length; i++){
        if(i % 2 ==0){
        arr.splice(i,1,'even index')
        }
    }
}

replaceEvens()
console.log(arr)


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
console.log(person3.pizza)
console.log(person3.tacos)
console.log(person3.burgers)
console.log(person3.ice_cream)
console.log(person3.shakes[0].oberwise)
console.log(person3.shakes[0].dunkin)
console.log(person3.shakes[0].culvers)
console.log(person3.shakes[0].mcDonalds)
console.log(person3.shakes[0].cupids_candies)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person{
    constructor(name, age,){
        this.name = name,
        this.age = age

    }

// Use an arrow to create the printInfo method

returnInfo = () => {
    return `Name: ${this.name} \n Age: ${this.age}`
    
}
    
}


// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

let John = new Person ('John', 25)
console.log(John)
console.log(John.returnInfo())


let wilma = new Person('Wilma', 30)
console.log(wilma)
console.log(wilma.returnInfo())



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const isMoreThanTen = (num) =>{
    return new Promise(
        (resolve,reject)=>{
            if(num.length > 10){
                resolve (true)
            }else{
                resolve(false)
            }
        }
    )
}
isMoreThanTen("hellllllooooooooooo").then(
    (result) =>{
        console.log("Big Word")
    }
).catch(
    (error) =>{
        console.log("Small Number")
    }
)
