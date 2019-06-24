require 'sinatra'

get '/' do
  "Turn up!!! Don't go json waterfalls. 💦" * 10
end

get '/turndown' do
  "For what?"
end

get '/goodvibes' do
  "here are some good vibes ✌️"
end

delete '/goodvibes' do
  "oh nah"
end
