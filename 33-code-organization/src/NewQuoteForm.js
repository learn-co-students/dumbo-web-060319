class NewQuoteForm {
  constructor(){
    this.form = document.querySelector("#new-quote-form")
    this.form.addEventListener("submit", this.formSubmitted.bind(this))
  }

  formSubmitted(event){
    event.preventDefault()
    QuotesAdapter.createQuote(this.getFormData())
      .then()
  }

  getFormData(){
    return {
      quote: this.getValue("quote"),
      author: this.getValue("author"),
    }
  }

  getValue(name){
    return this.form[name].value
  }

}