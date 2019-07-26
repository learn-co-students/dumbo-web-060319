class Quote {
  constructor(quoteData) {
    this.id = quoteData.id
    this.quoteText = quoteData.quote
    this.author = quoteData.author
    this.likes = quoteData.likes
  }

  likesCount(){
    return this.likes ? this.likes.length : 0
  }

  likeButtonClicked = () => {
    QuotesAdapter.addLikeToQuote(this.id)
      .then(this.incrementLikes)
  }

  incrementLikes = like => {
    this.numberOfLikes.innerText++
  }

  deleteButtonClicked = () => {
    QuotesAdapter.deleteQuote(this.id)
      .then(data => this.domQuote.remove())
    // console.log(this.id)
  }

  render(){
    this.domQuote = document.createElement("li")
    this.domQuote.className = "quote-card"

    this.domQuote.innerHTML = `
      <blockquote class="blockquote">
        <p class="mb-0">${ this.quoteText }</p>
        <footer class="blockquote-footer">${ this.author }</footer>
        <br>
        <button class='btn-success'>Likes: <span class="num-likes">${ this.likesCount() }</span></button>
        <button class='btn-danger'>Delete</button>
      </blockquote>`

    this.likeButton = this.domQuote.querySelector(".btn-success")
    this.deleteButton = this.domQuote.querySelector(".btn-danger")
    this.numberOfLikes = this.likeButton.querySelector(".num-likes")

    this.deleteButton.addEventListener("click", this.deleteButtonClicked)
    this.likeButton.addEventListener("click", this.likeButtonClicked)

    return this.domQuote
  }

}