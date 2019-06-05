class Clown
  attr_accessor :name, :age, :skill
  attr_reader :wallet
  attr_writer :fear

  def initialize(
    name = "Unamed Clown", 
    age = "Unknown", 
    skill = "Unknown", 
    fear = "I AM FEAR"
  )
    @name = name
    @age = age
    @skill = skill
    @fear = fear
    @wallet = 0
  end

  # introduce clown

  def introduce_clown
    puts "Hello my name is #{name}"
    puts "My skill is #{skill}"
    puts "My age is #{age}"
    puts "my fears are... well I have no fears...!"
  end


  def tell_secret
    puts "Psstt.... Don't tell anyone... but I am REALLY afraid of #{@fear}"
  end

  def pay_clown(amount)
    @wallet = @wallet + amount
  end

end