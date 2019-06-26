students = ["Abdul Sayed",
"Abril Anchondo Reynaga",
"Alberto Duarte",
"Alex Schelchere",
"Brandon Lau",
"Chris Bell",
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
"Thomas Laforgia",
"Gracie 'Danger' McGuire",
"Nicky 'Da Cheese' Dover",
"Eric 'Hear Him Roar' Kim",
"Left Eye",
"T-Boz",
"Chilli"]

students.shuffle.each do |student_name|
  Student.create(
    name: student_name,
    age: rand(18),
    anxiety: student_name.split(" ")[0]
  )
end

alex = Student.find_by(name: "Alex Schelchere")
muhammad = Student.find_by(name: "Muhammad Musah")
abril = Student.find_by(name: "Abril Anchondo Reynaga")
francis = Student.find_by(name: "Francis Mendez")

mantis = Dream.create(name: "Praying Mantis and Bunk Beds oh my", intensity: 100)
wakanda = Dream.create(name: "Build Real-World Wakanda", intensity: 100)
whales = Dream.create(name: "Swimming with Whales", intensity: 100)
communication = Dream.create(name: "Seamless communication between everyone", intensity: 95)
psy = Dream.create(name: "Psychic Apocalypse", intensity: 99)








puts "It has been seeded!"
