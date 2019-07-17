
// console.log("hello from line 2")



function slapDogOnTheDOM(data){
  const li = document.createElement("li")
  li.innerHTML = `
    <img src="${ data.message }" />
  `
  document.querySelector("#dogs").append(li)
}

function clickHandler(){
  
  // console.log("about to fetch")
  // var promise = fetch("https://dog.ceo/api/breeds/image/random")
  // promise.then(function(response){
  //   return response.json()
  // }).then(function(data){
  //   console.log(data)
  // })


  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(slapDogOnTheDOM)

  // console.log(doge)

}

// setInterval(clickHandler, 1000)

document.addEventListener("DOMContentLoaded", function(){
  const button = document.querySelector("#hello-button")
  button.addEventListener("click", clickHandler)
  // console.log(button);
  // console.log("hello from line 8")
})

// console.log("hello from line 12")






// console.log("blort")

// setInterval(function(){
//   console.log("ehkll" + new Date)
// }, 1000)


// console.log("splert")




