class User
  attr_reader :username

  def initialize(username)
    @username = username
    @tweets = []
  end

  def tweets
    Tweet.all.select do |tweet|
      tweet.user == self
    end
  end

  def post_tweet(message)
    Tweet.new(message, self)
  end

end