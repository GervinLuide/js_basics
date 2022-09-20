let val

// number laheb string
val = String(555)
val = String(4+4)
val = String(5.8)

//boolean = string
val = String(true)
val = String(false)

//Object = string
val = String(new Date())

// null = string
val = String(null)

// array = string
val = String([1, 2, 3, 4, 5])

// undefined = String
val= String(undefined)

// toString()

val = (true).toString()

//String = number
val = Number(5)
//Boolean = Number
val = Number(true)
val = Number(false)
// Null = number
val = Number(null)
// string = Number
val = Number("test")
// Array = Number
val = Number([1, 2, 3])
//toString()
val=(true).toString()
// String = integer
val = parseInt("100.3")
//String = Float
val = parseFloat("100.30")
console.log(val)