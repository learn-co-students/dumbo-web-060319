# One to Many Relationships

## Objectives

* Explain domain modeling
   * `Model`
   * `Domain`

* Example - Twitter
   * `User`: Stores data about our users.
   * `Tweet`: Stores data about our tweets.

* Relationships
   * **one-to-many** - in our example, a `User` `has_many` tweets and a `Tweet` `belongs_to` a user.
   * **many-to-many** - more on this tomorrow

* Implement one object to many objects relationship
  * One object has many objects
  * One object belongs to another object
* Practice passing custom objects as arguments to methods
* Review `self`

* Demonstrate single source of truth
* Infer type of method (class or instance) through naming conventions



## Deliverables

* Create a User class. The class should have these methods:
  * `#initialize` which takes a username and have
  * a reader method for the username
  * `#tweets` that returns an array of Tweet instances
  * `#post_tweet` that takse a message, creates a new tweet, and adds it to the user's tweet collection
* Create a Tweet class. The class should have these methods:
  * `Tweet#message` that returns a string
  * `Tweet#user` that returns an instance of the user class
  * `Tweet.all` that returns all the Tweets created.
  * `Tweet#username` that returns the username of the tweet's user
