require 'pry'
require 'rest-client'
require 'json'


# figure out where you're going to get your list of books
puts `clear`
# welcome the user to our cool app
puts "Sup! Welcome to our 📚 app!"
# tell the user to put in a search term
puts "Tell us something you are interested in:"
# grab user input so we know what kind of books to look for
user_input = gets.chomp
# we need to send our user input into our API
url = "https://www.googleapis.com/books/v1/volumes?q=#{user_input}"
# use our api in ruby
 # use our ruby client to go to our API
response = RestClient.get url
 # turn our json string into ruby
parsed_response = JSON.parse(response.body)
# display the results of our search to the user # make the results readable
puts "We found some great books for you! Well... only one right now..."
puts "📚" * 20
# show all the books we get back (10):
books = parsed_response["items"]

books.each do |book|
  # with only this info:
  puts ""
  puts "-----------------------------------"
  # - title
  puts "title:"
  puts book["volumeInfo"]["title"]
  # - authors
  puts "authors:"
  puts book["volumeInfo"]["authors"]
  # - description
  puts "description:"
  puts book["volumeInfo"]["description"]
end




# binding.pry
