class Actor
  attr_reader :yob
  attr_accessor :name

  @@all = []

  def initialize(name, yob)
    @name = name
    @yob = yob

    @@all << self
  end

  def self.all
    @@all
  end

  def star_in_movie(movie, starring_role)
    Role.new(self, movie, starring_role)
  end

  def roles
    Role.all.select do |role|
      role.actor == self
    end
  end

  def movies
    roles.map do |role|
      role.movie
    end
  end

  # we don't need dis cause we have attr_reader
  # def yob
  #   @yob
  # end


end
