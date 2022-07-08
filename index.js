const setShowGroomPage = () => {
    setIdVisible("groomPage")
    setIdHidden("homePage")
}

const setShowHomePage = () => {
    setIdVisible("homePage")
    setIdHidden("groomPage")
}

const groomButton = document.getElementById("groomButton")
groomButton.addEventListener('click', setShowGroomPage)

const homeButton = document.getElementById("homeButton")
homeButton.addEventListener('click', setShowHomePage)

function setIdHidden(id) {
    const element = document.getElementById(id)
    // element.classList.remove("visible")
    element.classList.add("hidden")
}

function setIdVisible(id) {
    const element = document.getElementById(id)
    element.classList.remove("hidden")
    // element.classList.add("visible")
}

const enterText = "প্রবেশ"
// const enterText = "enter"
const arrows = document.querySelectorAll(".arrow")
arrows.forEach(arrow => arrow.textContent = enterText)
// arrow.textContent = enterText
