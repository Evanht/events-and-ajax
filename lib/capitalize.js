// First letter and uppercase, get the rest of
//  the string and downcase

const capitalize = (string) => {
  return string[0].toUpperCase() + string.substr(1).toLowerCase()
}

console.log(capitalize("EVAN"))
console.log(capitalize("jUhN"))
