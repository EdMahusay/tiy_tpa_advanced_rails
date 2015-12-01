Rails.application.routes.draw do
  resources :books
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  match "/websocket", :to => ActionCable.server, via: [:get, :post]

  root 'books#index'
end
