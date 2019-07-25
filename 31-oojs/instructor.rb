require 'pry'

class Instructor

  attr_reader :name, :full_name

  # constructon
  def initialize(name) 
    @name = name
    @full_name = "Barbara Bush"
  end

  def introduction
    "Hello, I'm #{ self.name }!"
  end

end


binding.pry


