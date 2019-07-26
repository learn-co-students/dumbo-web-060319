class NewQuoteForm {
  constructor(quoteCreatedCallback){
    this.quoteCreatedCallback = quoteCreatedCallback

    this.form = document.querySelector("#new-quote-form")
    this.form.addEventListener("submit", this.formSubmitted.bind(this))
  }

  formSubmitted(event){
    event.preventDefault()
    const formData = this.getFormData()
    this.form.reset()
    QuotesAdapter.createQuote(formData)
      .then(this.quoteCreatedCallback)
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