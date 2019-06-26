class StudentDream < ActiveRecord::Base
  belongs_to :student
  belongs_to :dream
end
