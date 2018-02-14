const beatles = ["paul", "john", "ringo", "george"]

// ES6 Define Function
const elementToUpperCase = (element) => {
  return element.toUpperCase()
}

// ES5 (OLD JS) Define Function
function oldElementToUpperCase(element) {
  return element.toUpperCase()
}

// forEach with ES5 (OLD JS) Anonymous Function as argument
beatles.forEach(function(element) {
  return element.toUpperCase()
})

// forEach with ES6 Anonymous Arrow Function as argument
beatles.forEach((element) => {
  return element.toUpperCase()
})

// Inline ES6 function with implicit return
const square = x => x * x

// Inline ES6 function with implicit return and 2 params
// note the parentheses around params
const product = (x, y) => x * y

// MultiLine ES6 function with implicit return.
// Notice the parentheses surrounding function body instead of
// curly braces.
const capitalize = word => (
  word[0].toUpperCase() + word.substr(1).toLowerCase()
)
