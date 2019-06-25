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

students.each do |student_name|
  Student.create(
    name: student_name,
    age: rand(18),
    anxiety: student_name.split(" ")[0]
  )










end


puts "It has been seeded!"
