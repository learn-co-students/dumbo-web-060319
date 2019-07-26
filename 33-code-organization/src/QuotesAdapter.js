  
class QuotesAdapter {

  static baseUrl(){
    return "http://localhost:3000"
  }

  static getTheHeadersPlease(){
    return {
      "Content-Type": "application/json",
      "Accept": "application/json",
    }
  }

  static fetchConfig(verb, bodyObject) {
    return {
      method: verb,
      headers: this.getTheHeadersPlease(),
      body: JSON.stringify(bodyObject)
    }
  }
  
  static getQuotesWithLikes() {
    return fetch(this.baseUrl() + "/quotes?_embed=likes")
      .then(res => res.json())
  }

  static addLikeToQuote(quoteId){
    const fetchConfig = this.fetchConfig("POST", { quoteId: quoteId })
    return fetch(this.baseUrl() + "/likes", fetchConfig)
      .then(res => res.json())
  }

  static createQuote(quote){
    const fetchConfig = this.fetchConfig("POST", quote);
    return fetch(this.baseUrl() + "/quotes", fetchConfig)
      .then(res => res.json())
  }

  static deleteQuote(quoteId) {
    return fetch(this.baseUrl() + "/quotes/" + quoteId, { method: "DELETE" })
  }

}


