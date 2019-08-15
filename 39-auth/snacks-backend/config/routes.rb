Rails.application.routes.draw do
  # resources :users_snacks
  resources :users, only: [:show]
  resources :snacks, only: [:index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
