require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    "¡¡¡Turn up!!! Don't go json waterfalls. 💦" * 10
  end

end
