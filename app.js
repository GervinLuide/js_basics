/*
if(condition) {
    // if statements
} else {
    // else statements
}

== vorduv -> ===
!= ei vordu -> !==

 */


let personID = 34;

if(typeof personID === "undefined"){
    console.log("id is not correct")
} else {
    console.log(`id is ${personID}`)
}

/*
if(condition) {
    // if statements
} else if (condition1){
    //if1 statements
} else {
    else statement
}
 */

const color ="yellow"

/* if(color === "red"){
    console.log("stop!")
} else if (color === "yellow") {
    console.log("attendtion!")
} else if (color === "green")
    console.log("go!")
} else {
    console.log("error!")
} */


const name ="Kadi"
const age = 40

if (age > 0 && age <= 12){
    console.log(`${name} on laps`)
} else if (age > 12 && age <18){
    console.log(`${name} on nooruk`)
} else {
    console.log(`${name} on täiskasvanu`)
}

let id = 5

if(id === 100){
    console.log("ok")
} else {
    console.log("not")
}
// ? - ternary
console.log(id === 100 ? "OK" : "not")

//switch
const color = "red"

switch (color){
    case="red":
        console.log("stop!")
        break;
    case="yellow":
        console.log("attention!")
        break;
    case="green":
        console.log("go!")
        break;
    default:
        console.log("error!")

}







console.log(personID)