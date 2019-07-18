
// const headers = {
//   "Content-Type": "application/json",
//   "Accept": "application/json",
// }
// const spiceGirl = {
//   name: "Geri Halliwell",
//   adjective: "Ginger"
// }
// const config = {
//   method: "POST",
//   headers: headers,
//   body: JSON.stringify(spiceGirl)
// }


// fetch("http://localhost:3000/spice-girls/", config)



// ## Read
// 1. When DOMContentLoaded event happens
// 2. Make GET /to-do-items fetch happen
// 3. Slap li's on the DOM!

function slapLisOnTheDOM(data){

  const ol = document.querySelector("#to-do-items")

  // console.log(ol)
  data.forEach((toDoItem) => {
    const li = document.createElement("li")
    li.className = "item"

    if (toDoItem.done)
      li.classList.add("done")

    li.innerHTML = `
      <input id="to-do-item-${ toDoItem.id }" type="checkbox" ${ toDoItem.done ? "checked" : "" } />
      <label for="to-do-item-${ toDoItem.id }" class="js-title middle aligned content">${ toDoItem.title }</label>
    `

    ol.append(li)
  })
}

document.addEventListener("DOMContentLoaded", function(){
  fetch("http://localhost:3000/to-do-items")
    .then(response => response.json())
    .then(slapLisOnTheDOM)

//     ## Create
// 1. When Click on the Add button event happens
// 2. Make POST /to-do-items fetch
// 3. Slap the single to-do item on the DOM!

  const form = document.querySelector("#new-to-do")
  // const input = document.querySelector("#new-to-do input[type='text']")
  

  form.addEventListener("submit", function(event){

    event.preventDefault()

    const title = event.target.title.value

    fetch("http://localhost:3000/to-do-items/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        title: title
      })
    })

  })

})











