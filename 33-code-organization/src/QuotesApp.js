class QuotesApp {
  
  constructor(){
    const quoteList = new QuotesList()
    new NewQuoteForm(quoteList.slapOneQuoteOnTheDOM)
  }

}

