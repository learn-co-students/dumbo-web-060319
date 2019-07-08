# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



30.times do |num|
  chunks = ["FF", "00"]
  chunks << sprintf("%02X", rand(0...255))
  Color.create(hex: chunks.shuffle.join(""))
end

student_names = [
"Abdul Sayed",
"Abril Anchondo Reynaga",
"Alberto Duarte",
"Alexander Schelchere",
"Brandon Lau",
"Christopher Bell",
"Dennis Basyrov",
"Franchely Portorreal",
"Francis Mendez",
"Garrett Halstein",
"Gia Edgington",
"Hamza Javed",
"Justin Hutsell",
"Kevin Lai",
"Muhammad Musah",
"Richard Li",
"Samip Sharma",
"Sean Padden",
"Thomas Laforgia"
]

student_names.shuffle.each do |name|
  User.create(name: name, username: name.split(" ")[0], password: "abc123")
end
