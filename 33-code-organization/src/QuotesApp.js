class QuotesApp {
  
  constructor(){
    const quotesList = new QuotesList()
    new NewQuoteForm(quotesList.slapQuoteOnTheDOM)
  }

}

