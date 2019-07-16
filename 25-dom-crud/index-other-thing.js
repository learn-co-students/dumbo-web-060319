

const tacoButton = document.querySelector("#taco")
const listOfShit = document.querySelector("#blobs")


function makeSmall(e){
  e.target.style.transform = "scale(.4)"
}


tacoButton.addEventListener("click", function(event){
  const li = document.createElement("li")
  li.innerText = "🌮"
  li.addEventListener("mouseover", makeSmall)
  listOfShit.append(li)
})


const lis = document.querySelectorAll("li")
console.log(lis)
lis.forEach(function(liTag){
  console.log(liTag)
  liTag.addEventListener("mouseover", makeSmall)  
})



