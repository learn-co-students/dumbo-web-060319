class QuotesList {
  
  constructor(){
    this.quoteList = document.getElementById("quote-list")
    
    QuotesAdapter.getQuotesWithLikes()
      .then(this.slapQuotesOnTheDOM.bind(this))
  }

  slapQuotesOnTheDOM(quotes) {
    quotes.forEach((quoteData) => {
      const quoteComponent = new Quote(quoteData)
      this.quoteList.innerHTML += quoteComponent.render()
    })
  }

}

