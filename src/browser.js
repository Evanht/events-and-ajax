const toggleCircle = (event) => {
  event.currentTarget.classList.toggle("circle-img")
}

const addListenerToElem = (elem) => {
  elem.addEventListener("click", toggleCircle)
}

const addSecondListenerToElem = (elem) => {
  elem.addEventListener("click", (event) => {
    alert(event.currentTarget)
  })
}


// Basic example of preventing default behaviour on a link. I.e. stopping
// it from navigating when clicked.
const link = document.getElementById("link")

link.addEventListener("click", (event) => {
  event.preventDefault()
})


// Getting all the delete links in the page and putting an eventListener on them
// that opens a confirm dialog when the user clicks on the link. If they click
// cancel then condition will evaluate and we will prevent the defualt behaviour
// so that the link doesn't navigate us away.
const links = document.querySelectorAll(".confirmable")

links.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    if (!confirm("Do you really want to delete?")) {
      event.preventDefault()
    }
  })
})


const addImage = () => {
  const newImage = document.createElement("img")
  newImage.src = "https://kitt.lewagon.com/placeholder/users/ssaunier"
  newImage.style.height = "200px"
  newImage.classList.add("clickable")
  document.body.append(newImage)
  addListenerToElem(newImage)
  // LOOK WE CAN BIND TWO LISTENERS TO A SINGLE ELEMENT
  addSecondListenerToElem(newImage)
}

// Getting the people UL and then calling the people endpoint
// on the star wars API using ES6 fetch(url). Fetch returns a promise
// and when the promise 'resolves' i.e. the response is received from the API,
// we go into the .then
const people = document.getElementById("people")

fetch("https://swapi.co/api/people/")
  .then(response => response.json())
  .then((data) => {
    data.results.forEach((person) => {
      const item = `<li>${person.name}</li>`
      people.insertAdjacentHTML("beforeend", item)
    })
  })


// If we have the script in the Head then we need to wait for the
// DOM to load before we execute our JS.
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed")
  const imgElems = document.querySelectorAll(".clickable")
  imgElems.forEach(addListenerToElem)
  setTimeout(addImage, 1000)
})
