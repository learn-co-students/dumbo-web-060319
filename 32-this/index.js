
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
//   .then(res => res.json())
//   .then(function(data){
//     // console.log(data)
//     console.log(this)
//   })


// class Whatever {

//   constructor() {
    // ;[1,2,3,4,57,8,89].forEach(function(num, i, wholeArray) {
    //   console.log(this)
    //   console.log(num)
    //   console.log(i)
    //   console.log(wholeArray)
    // })
//   }

// }

// new Whatever()

// // console.log(this)

// document.addEventListener("DOMContentLoaded", function(){
//   const clicky = document.querySelector(".clicky")

//   // console.log(this)

//   clicky.addEventListener("click", function(){
//     // console.log(this)
//   })

// })


// var introduce = () => {
//   console.log(this)
//   return `HEY, it's ${ this.fullName }!`
// }

// const nicky = {
//   fullName: "Nicholas Dover",
//   name: "Nicky",
//   introduce: introduce
// }

// const graham = {
//   legalName: "Graham Aden Troyer-Joy",
//   name: "Graham",
//   introduce: nicky.introduce
// }

// const gracie = {
//   fullName: "M. Gracie MaçkGuiér III",
//   name: "Gracie",
//   introduce: graham.introduce
// }

// const samip = gracie.introduce

// console.log(samip())

// document.addEventListener("DOMContentLoaded", event => {
//   console.log(this)
// })

// ;[1,2,3,4,5,6].forEach(introduce)

//  fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
//   .then(res => res.json())
//   .then(introduce)

// class Whatever {

//   constructor(){

//     document.body.addEventListener("click", (event) => {
//       console.log(this)
//       console.log(event.target)
//       console.log(event.currentTarget)
//       // console.log(this === event.target)
//     })

//   }

// }

// new Whatever()


class ButtonThing {

  constructor(color){
    this.color = color

    // const that = this

    this.button = document.createElement("button");
    this.button.innerHTML = `blort ${ this.color }`

    // const onButtonClick = function(){
    //   console.log(this)
    //   document.body.style.backgroundColor = this.color;
    // }


    // // onButtonClick.call(this)

    // const boundOne = onButtonClick.bind("POTATO")
    // console.log(boundOne)
    // console.log(boundOne === onButtonClick)
    // boundOne()

    // this.onButtonClick = this.onButtonClick.bind(this) //.bind("Alex")

    // console.log(this)

    this.button.addEventListener("click", this.onButtonClick)

    document.body.append(this.button)
  }


  onButtonClick = () =>  {
    // console.log(that)
    console.log(this)
    document.body.style.backgroundColor = this.color;
  }

}

var thing1 = new ButtonThing("#f00");
// console.log(thing1)
var thing2 = new ButtonThing("#0f0");
var thing3 = new ButtonThing("#00f");
var thing4 = new ButtonThing("#fff");
var thing5 = new ButtonThing("#000");
var thing6 = new ButtonThing("#d6dfae");
















