class QuotesList {
  
  constructor(){
    this.quoteList = document.getElementById("quote-list")
    
    QuotesAdapter.getQuotesWithLikes()
      .then(this.slapQuotesOnTheDOM.bind(this))
  }

  slapQuotesOnTheDOM(quotes) {

    // const domNodes = quotes.map(quoteData => new Quote(quoteData))
    //       .map(quoteInstance => quoteInstance.render())

    // this.quoteList.append(...domNodes)
    quotes.forEach(this.slapOneQuoteOnTheDOM)
  }

  slapOneQuoteOnTheDOM = (quoteData) => {
    const quoteComponent = new Quote(quoteData)
    this.quoteList.append(quoteComponent.render())
  }

}

