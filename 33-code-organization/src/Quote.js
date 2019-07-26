class Quote {
  constructor(quoteData) {
    this.quoteText = quoteData.quote
    this.author = quoteData.author
    this.likes = quoteData.likes
  }

  likesCount(){
    return this.likes.length
  }

  render(){

    return `<li class='quote-card'>
      <blockquote class="blockquote">
        <p class="mb-0">${ this.quoteText }</p>
        <footer class="blockquote-footer">${ this.author }</footer>
        <br>
        <button class='btn-success'>Likes: <span>${ this.likesCount() }</span></button>
        <button class='btn-danger'>Delete</button>
      </blockquote>
    </li>`
  }

}