class Movie
  attr_accessor :name, :genre, :revenue

  @@all = []
  def initialize(name, genre, revenue)
    @name = name
    @genre = genre
    @revenue = revenue

    @@all << self
  end

  def self.all
    @@all
  end

  def cast_actor(actor, starring_role)
    Role.new(actor, self, starring_role)
  end

  def roles
    Role.all.select do |role|
      role.movie == self
    end
  end

  def actors
    roles.map do |role|
      role.actor
    end
  end
end
