require 'pry'

require_relative './models/tweet.rb'
require_relative './models/user.rb'


user1 = User.new("coffee_dad")
user2 = User.new("wacky_the_clown")

tweet1 = Tweet.new("need coffee", user1)
tweet3 = Tweet.new("I'll show them all...", user1)

tweet2 = Tweet.new("need money...", user2)
tweet4 = Tweet.new("I should learn how to program...", user2)

binding.pry


0