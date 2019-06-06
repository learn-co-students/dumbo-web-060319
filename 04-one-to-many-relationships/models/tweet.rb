class Tweet
  attr_reader :message, :user

  @@all = []

  def initialize(message, user)
    @message = message
    @user = user

    # @user.tweets << self
    @@all << self # only want 1 source of truth for tweets
  end

  # instance method
  def another_instance_method
    self
  end

  def username
    user.username
  end

  # class methods
  def self.all
    @@all
  end


end