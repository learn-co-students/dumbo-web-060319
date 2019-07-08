Rails.application.routes.draw do
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :colors, only: [:index] do
    resources :votes, only: [:create]
  end

  resources :votes, only: [:index, :destroy]

  # resources :auth

  get "/login", to: "auth#new", as: "login"
  # Getting the Login Form

  post "/auth", to: "auth#create"
  # Getting the information from the user (via the form)

  delete "/auth", to: "auth#destroy"
  # Loggin Out


  root "colors#index"
end
