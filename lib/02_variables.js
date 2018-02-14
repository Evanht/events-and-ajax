// Here we need to know about three keywords
// - var (old ES5 JS)
// - const (ES6)
// - let (ES6)

// We use const when we don't want the variable to be
// reassigned. We use it in 95% of cases.
const firstName = "Evan"

// We use let when we want to reassign the variable.
let counter = 1
counter += 1
console.log(counter)
