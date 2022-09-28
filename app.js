const form = document.querySelector("form")
const taskInmput = document.querySelector("#task")
const tasksHeading = document.querySelector("#task-title")
//submit
form.addEventListener('submit', runEvent)

//keyboard
//taskInmput.addEventListener("keydown", runEvent)
//taskInmput.addEventListener("keyup", runEvent)
//taskInmput.addEventListener("keypress", runEvent)

// focus
//taskInmput.addEventListener("focus", runEvent)
//taskInmput.addEventListener("blur", runEvent)


//taskInmput.addEventListener("cut", runEvent)
//taskInmput.addEventListener("paste", runEvent)
taskInmput.addEventListener("input", runEvent)




function runEvent(event){
    console.log(`Event type ${event.type}`)
    tasksHeading.innerText = event.target.value
    event.preventDefault()
    //event.preventDefault()
}