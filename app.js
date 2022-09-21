const firstname = "gervin"
const surname = "luide"
const email = "gervin.luide@voco.ee"
const department = "IKT"

let result = "<ul>" +
    "<li> <b>Name</b>" + firstname + "</b>" +
    "<li>" + surname + "</li>" +
    "<li>" + email + "</li>" +
    "<li>" + department + "</li>" +
    "</ul>"

result = `<ul>
<li> <b>name:</b>${firstname} </li>
<li> <b>surname:</b>${surname} </li>
<li> <b>email:</b>${email} </li>
<li> <b>department:</b>${department} </li>
</ul>`
console.log(result)