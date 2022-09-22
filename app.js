console.log("for loop")
for (let i = 0; i < 10; i++) {
    if(i == 5){
        //break
        continue
    }
    console.log(i)
}

console.log("while loop")
let i1 = 0;
while (i1 < 10){
    console.log(i1)
    i1 ++
}

console.log("do-while loop")
let i2 = 0;
do{
    console.log(i2)
    i2++
} while (i2 <10)


const cars = ["Audi", "Tesla", "BMW"]
cars.forEach((car) =>{
    console.log(car)
})

const person = {
    firstname: "Kadi"
    lastname:"Tamm"
    age: "40"
}
for (let personKey in person) {
    console.log(person[personKey])
}


