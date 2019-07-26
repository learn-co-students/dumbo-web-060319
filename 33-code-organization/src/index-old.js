// It might be a good idea to add event listener to make sure this file 
// only runs after the DOM has finshed loading. 

const BASE_URL = "localhost:3000"
const QUOTES_URL = `http://${ BASE_URL }/quotes`
const LIKES_URL = `http://${ BASE_URL }/likes`
const QUOTES_URL_WITH_LIKES = `${ QUOTES_URL }?_embed=likes`
const elementCache = {}
const liProps = {
  className: "quoteCard"
}
const DELETE_OBJECT = { method: "DELETE" }
const JSON_MIME = "application/json"
const HEADERS = ["Content-Type", "Accept"].reduce((accumulator, headerName) => (accumulator[headerName] = JSON_MIME) && accumulator, {})
const fetchConfig = (method, body) => ({ method, headers: HEADERS, body: JSON.stringify(body) })
const liTemplate = quote => `<blockquote class="blockquote">
  <p class="mb-0">${ quote.quote }</p>
  <footer class="blockquote-footer">${ quote.author }</footer>
  <br>
  <button class='btn-success' data-id="${ quote.id }">Likes: <span class="likes-number">${ quote.likes ? quote.likes.length : 0 }</span></button>
  <button class='btn-danger' data-id="${ quote.id }">Delete</button>
</blockquote>`

const getAllQuotes = () => fetch(QUOTES_URL_WITH_LIKES)
const jsonify = promise => promise.then(res => res.json())

const cacheElement = (method, arg, cacheKey) => elementCache[cacheKey] = (elementCache[cacheKey] || document[method](arg))
const quoteForm = () => cacheElement("querySelector", "#new-quote-form", "quoteForm")
const quoteList = () => cacheElement("querySelector", "#quote-list", "quoteList")
const makeHtmlId = quote => ["quote", quote.id].join("-")
const makeQuoteLi = quote => Object.assign(document.createElement("li"), liProps, { innerHTML: liTemplate(quote), id: makeHtmlId(quote) })
const slapQuotesOnTheDOM = quotes => quoteList().append(...quotes.map(makeQuoteLi))
const onDomContentLoaded = event => jsonify(getAllQuotes()).then(slapQuotesOnTheDOM)

const makeLike = id => fetch(LIKES_URL, fetchConfig("POST", { quoteId: id }))
const updateLikes = ({ target }) => () => target.querySelector(".likes-number").innerHTML++
const likeClick = event => jsonify(makeLike(parseInt(event.target.dataset.id))).then(updateLikes(event))

const nuke = id => () => document.getElementById(makeHtmlId({ id })).remove()
const buhlete = id => fetch([QUOTES_URL, id].join("/"), DELETE_OBJECT)
const datasetize = ({ target: { dataset: { id }}}) => id
const deleteClick = event => jsonify(buhlete(datasetize(event))).then(nuke(datasetize(event)))

const preventify = fn => event => event.preventDefault() || fn(event).then(clearForm(event))
const clearForm = ({ target }) => () => target.reset()
const newQuoteSubmit = preventify(({ target: { quote: { value: quote }, author: { value: author } }}) => jsonify(fetch(QUOTES_URL, fetchConfig("POST", { quote, author }))).then(data => slapQuotesOnTheDOM([data])))

const CLASS_LIST_DISPATCH = [
  {
    className: "btn-success",
    fn: likeClick
  }, {
    className: "btn-danger",
    fn: deleteClick
  }
]

const findByClassName = classList => CLASS_LIST_DISPATCH.find(dispatcher => classList.contains(dispatcher.className))
const dispatch = event => (findByClassName(event.target.classList) || { fn: () => { /* noop */ } }).fn(event)
const quoteListClicked = event => dispatch(event)

;[
  {
    node: document,
    args: ["DOMContentLoaded", onDomContentLoaded]
  },
  {
    node: quoteList(),
    args: ["click", quoteListClicked]
  },
  {
    node: quoteForm(),
    args: ["submit", newQuoteSubmit]
  }
].forEach(listener =>listener.node.addEventListener(...listener.args))




