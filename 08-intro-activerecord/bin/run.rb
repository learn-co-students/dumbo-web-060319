require_relative "../config/environment"

puts "Welcome Trainer"
puts "What is your name?"

trainer_name_input = gets.chomp

puts "you put #{trainer_name_input}, is that right?"

confirm_input = gets.chomp

if confirm_input == "yes"
  current_trainer = Trainer.create(name: trainer_name_input, badge_count: 0)
end