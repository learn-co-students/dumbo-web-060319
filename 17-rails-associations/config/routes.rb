Rails.application.routes.draw do
  resources :breads


  # get "/breads/new", to: "breads#new", as: "new_bread"
  # post "/breads", to: "breads#create"

  # get "/breads", to: "breads#index", as: "breads"
  # get "/breads/:id", to: "breads#show", as: "bread"

  # get "/breads/:id/edit", to: "breads#edit", as: "edit_bread"
  # patch "/breads/:id", to: "breads#update"

  # delete "/breads/:id", to: "breads#destroy"


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
