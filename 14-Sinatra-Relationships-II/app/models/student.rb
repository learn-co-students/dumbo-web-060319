class Student < ActiveRecord::Base
  has_many :student_dreams
  has_many :dreams, through: :student_dreams

  def dream_count
      self.dreams.count
  end

end
