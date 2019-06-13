class Tweet
  attr_accessor :message, :username, :id


  def initialize(message, username, id=nil)
    @message = message
    @username = username
    @id = id
  end


  def save
    sql = <<-SQL
      INSERT INTO tweets (message, username)
      VALUES ("#{self.message}","#{self.username}");
    SQL

    DB[:conn].execute(sql)
  end

  def self.create(message, username)
    tweet = Tweet.new(message, username)
    tweet.save
  end

  def self.all
    sql = <<-SQL
      SELECT * FROM tweets;
    SQL

    tweets_hashes = DB[:conn].execute(sql)

    tweets_hashes.map do |tweet_hash|
      Tweet.new(tweet_hash["message"], tweet_hash["username"], tweet_hash["id"])
    end
  end
end
