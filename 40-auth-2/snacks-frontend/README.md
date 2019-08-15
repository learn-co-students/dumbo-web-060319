Auth II
=======

## TODO

- [ ] Quick look at the updated Rails app.
- [ ] Using JWT with JavaScript
  - [ ] `fetch` to get JWT token.
  - [ ] `fetch` + JWT token to test our auth'ed endpoints.
- [ ] Incorporating Auth in React
  - [ ] Build out `LoginForm`.
  - [ ] Register with `LoginForm`.
  - [ ] Login with `LoginForm`.
  - [ ] Save our JWT token somewhere. Hmm... where?
  - [ ] Show that we are logged in somewhere.
  - [ ] Add `Redirect`s to protect our routes.
  - [ ] Get some data to display using out JWT token.
  - [ ] Add a logout button.

## Notes

### Playing around with our API with `fetch` and JWT.

```javascript
let API = 'http://localhost:3000';
let headers = {};
let body = "";
let method = "";
let init = { method: method, headers: headers, body: body };
method = 'POST'
headers = { "Content-Type": "application/json" };
body = JSON.stringify({ username: 'mike', password: "123" });

// Let's register!
let jwt = fetch(`${API}/users`, init).then(res => {
    return res.json();
}).then(json => {
    console.log(json);
    return json.token;
});

// JWT looks something like this:
// "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.O8pZYhjMQyhMz7cWLFlnPeVxY5p16Jaz7kv_y3cxrAc"

// Let's login!
let result = fetch(`${API}/sessions`, init).then(res => {
    return res.json();
}).then(json => {
    console.log(json);
    return json;
});

jwt = result.token;
let user_id = result.user_id;

// Let's get our snacks!
// /users/:user_id/snacks
method = 'GET';
headers["Authorization"] = jwt;

// However, this blows up!
// Why?
fetch(`${API}/users/${user_id}/snacks`, init).then(res => {
    return res.json();
}).then(json => {
    console.log(json);
    return json;
});

// No body allowed in GET requests for fetch.
// Let's remove the body key from our init object.
delete init.body

// rerun the above fetch
fetch(`${API}/users/${user_id}/snacks`, init).then(res => {
    return res.json();
}).then(json => {
    console.log(json);
    return json;
});
// Success!!
```

### Onto React!

```sh
# This won't work!
# Rails and React are both on port 3000.
# => Yes will let React automatically use a different port.
yarn start

# however, you can also manually pick it like this:
PORT=4000 yarn start
# About ports and reserved ports:
# https://en.wikipedia.org/wiki/Port_(computer_networking)
# https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers

# alternatively, you can run Rails on a different port like so:
rails s -p 5000
```

For all other notes on React + Auth, check out the source code. I've added a lot of comments in `App.js`, `LoginForm.js`, and `Snacks.js`.

### CORS

Once we try our first `fetch` in React, you'll get an error about CORS.
- [CORS == Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- Take some time to at least read through the MDN docs linked above or for a quicker overview, the [Wikipedia article on CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing).

While you don't need to know about CORS in detail, you should know what to do when you run into it. For Rails, you'll want to:
- add the `rack-cors` gem
- uncomment the code in `config/initializers/cors.rb`
- at minimum, edit the `origins` in that file
- and then restart Rails.

```ruby
# gem 'rack-cors'
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # * == wildcard
    # That would allow all clients access to our API.
    # Or you can do something like this to allow only specific clients.
    origins 'localhost:4000'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```
