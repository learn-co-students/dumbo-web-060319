# Part I

* AUTHENTICation
  - Is this person who they say they are?
* AUTHORization
  - Permitted to enter/view this page.

# Key questions for Authentication
*  What is the difference between Authorization and Authentication?
*  What is hashing and how does it make password storage more secure?
  - "abc123" -> "djbhkdhidnjblid.dgvbndkjvbhdibd.etyiuet"
  - "password123" -> "rgeirgleijgiejb.rfhbfiuhbee.girhjblifj"

*  What are rainbow tables and how can they defeat a password hashing strategy?
  - "abc123" -> "djbhkdhidnjblid.dgvbndkjvbhdibd.etyiuet"
  - "password123" -> "rgeirgleijgiejb.rfhbfiuhbee.girhjblifj"
  - "password" -> "rgeirgleijgiejb.rfhbfiuhbee.girhjblifj"
  - "a" -> "ghjrlijishgd.bjfbjfda/.bfhnblisj"
  - "aa" -> "bjndlibjiadjbl./dbfbkfjnblijdflibjd.sdasdas"

*  What is salting? What is a salt? How can it defeat a rainbow tables attack?

  - "abc123"
  => "abc123SALT"
  -> "djbhkdhidnjblid.dgvbndkjvbhdibd.etyiuet"

  - "abc123"
  => "SALTabc123"
  -> "gijeodigjida.gbudhbgidfjbild.gifjlbixjfilb"

## Let's implement
BCrypt

0) Uncomment out BCrypt Gem
1) Create a Migration with `password_digest`
2) Write `has_secure_password` on the class

* Sign up
* Log in

# Part II

# Key questions for Authorization
* How do we keep track of which user has logged in?
* How can we display who's logged in?
* How can we limit user behavior based on who's logged in?
* How do we log out?

## Let's implement

* List of a user's votes
* Delete a vote
* Log out
  * Route
  * View
