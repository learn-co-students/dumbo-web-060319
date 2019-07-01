class Review < ApplicationRecord
  belongs_to :bakery
  belongs_to :bread

  def bakery_name
    self.bakery.name
  end

  # def styled_review
  #   "#{self.content} - #{self.bakery}"
  # end

end
