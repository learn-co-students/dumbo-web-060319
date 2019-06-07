class Role
  attr_accessor :actor, :movie, :starring_role
  # role belongs to actor
  # role belongs to movie
  # therefore role has a reference to each the actor and movie it belongs to

  @@all = []

  def initialize(actor, movie, starring_role)
    @actor = actor
    @movie = movie
    @starring_role = starring_role

    @@all << self
  end

  def self.all
    @@all
  end

end
