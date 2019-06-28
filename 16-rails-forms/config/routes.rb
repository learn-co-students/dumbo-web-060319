Rails.application.routes.draw do
  resources :breads
  # get "/breads", to: "breads#index", as: "breads"
  # get "/breads/:id", to: "breads#show", as: "bread"
  
  # get "/chicken", to: "application#chicken", as: "beef"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
