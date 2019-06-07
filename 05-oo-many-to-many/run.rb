require 'pry'
require_relative "lib/actor.rb"
require_relative "lib/role.rb"
require_relative "lib/movie.rb"


rdj = Actor.new("Robert Downey Jr.", 1992)
chris = Actor.new("Chris Evans", 1920)
mark = Actor.new("Mark Ruffalo", 2012)
scarjo = Actor.new("Scarlett Johannsen", 1910)
cate = Actor.new("Cate Blanchett", 2019)

nph = Actor.new("Neil Patrick Harris", 2018)
phil = Actor.new("Phillip Seymour Hoffman", 2019)
gabby = Actor.new("Gabbrielle Union", 2001)
jmo = Actor.new("Janelle Monae", 1933)


avengers = Movie.new("Avengers: Endgame", "Superhero", 3000000)
blade_runner = Movie.new("Blade Runner", "Science Fiction", 2)
bring = Movie.new("Bring it On", "Comedy", 3)
moonlight = Movie.new("Moonlight", "Drama", 20)
ghost = Movie.new("Ghost in the Shell", "Science Fiction", 30)
batman = Movie.new("Batman Begins", "Superhero", 400)
hk = Movie.new("Harold & Kumar", "Comedy", 600)


rdj.star_in_movie(avengers, true)
chris.star_in_movie(avengers, true)
phil.star_in_movie(avengers, false)
moonlight.cast_actor(jmo, true)
hk.cast_actor(nph, false)
hk.cast_actor(jmo, true)

Role.new(chris, moonlight, false)

binding.pry
