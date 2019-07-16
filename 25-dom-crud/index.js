

const tacoButton = document.querySelector("#taco")


tacoButton.addEventListener("click", function(event){
  // console.log("sdfjkhsdkjh")

  // tacoButton.addEventListener("click", function(){
  //   alert("HELLO!")
  // })

})



document.addEventListener("click", function(){
  event.target.append("💁‍♀️")
})




document.addEventListener("scroll", makeSound)





const lis = document.querySelectorAll("li")
// for (let i = 0; i < lis.length; i++) {
//   const li = lis[i]
//   // console.log(li)
//   li.addEventListener("mouseover", function(){
//     console.log("sdfkhjgsdfjkh")
//   })
// }

function liMouseOver(event){
  event.target.style.backgroundColor = "green"
}

function eachLi(li){
  li.addEventListener("mouseover", liMouseOver)
}

lis.forEach(eachLi)


// lis.addEventListener("mouseover", function(){
//   console.log("fadhjksdfjkh")
// })