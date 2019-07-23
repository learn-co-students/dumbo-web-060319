



document.addEventListener("DOMContentLoaded", function(){

  const tacoList = document.getElementById("items")

  tacoList.addEventListener("click", function(event){

    // const item = event.path.find(element => element.classList && element.classList.contains("item"))

    // console.log(item)
    // console.log(event.target.matches(".item, .item *"))
    // if (item) {
    if (event.target.classList.contains("item")) {
      event.target.remove()
    }

  })


//   // console.log(tacoList.querySelectorAll("li"))

//   // tacoList.querySelectorAll("li").forEach(child => {
//   //   child.addEventListener("click", function(event){
      // event.target.remove()
//   //   })
//   // })

  const tacoButton = document.getElementById("taco")
  tacoButton.addEventListener("click", function(){
    tacoList.innerHTML += `<li class="taco item">🌮</li>`
  })


  // document.addEventListener("click", function(){
  //   console.log("documnent clicked")
  // })

  // document.body.addEventListener("click", function(){
  //   console.log("body clicked")
  // })

  // document.getElementById("items").addEventListener("click", function(event){
  //   console.log("event.target")
  //   console.log(event.target)
  //   console.log("event.currentTarget")
  //   console.log(event.currentTarget)
  // })



  // document.querySelectorAll("li").forEach(li => li.addEventListener("click", () => console.log("li clicked")))








})