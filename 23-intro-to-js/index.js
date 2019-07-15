console.log("connected");

let h1 = document.querySelector("h1")
let spanOfNotSo = h1.querySelector("span")
spanOfNotSo.remove()

let ulOfEmojis = document.querySelector("#blobs")
// let ulOfEmojis = document.getElementById('blobs')

let listOfBadEmojisQS = document.querySelectorAll(".bad")
// NodeList - YES .forEach

let allLIs = document.getElementsByTagName('li')
let ul = document.getElementsByName('waterfall')
// NodeList - YES .forEach


// CREATING STUFF TO SLAP ON THE DOM

// 1. Create a blank element
let newLI = document.createElement("li")

// 2. Add some razzmatazz
newLI.innerText = "🐕"
newLI.classList.add("good")
newLI.id = "doggo"

// 3. Slap it on Z dom

ulOfEmojis.append(newLI)


// Another Way
ulOfEmojis.innerHTML += "<li class='good'>🦄</li>"



let listOfBadEmojisGE = document.getElementsByClassName("bad")
// HTMLCollection - NO .forEach

for (let i = listOfBadEmojisGE.length - 1 ; i >= 0; i--) {
  listOfBadEmojisGE[i].remove()
}


// listOfBadEmojisQS.forEach((element) => element.remove())

//
