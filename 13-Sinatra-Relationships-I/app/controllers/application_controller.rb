require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
  end

  get "/" do
    # "<h1>¡¡¡Turn up!!! Don't go json waterfalls. 💦</h1> <p> Welcome to DGJSONW's homepage!</p>"
    erb :welcome
  end

end
