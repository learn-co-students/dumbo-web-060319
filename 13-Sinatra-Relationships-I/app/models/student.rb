class Student < ActiveRecord::Base
  has_many :dreams

  def dream_count
      self.dreams.count
  end

end
