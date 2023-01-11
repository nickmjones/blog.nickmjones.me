Rails.application.routes.draw do
  namespace :admin do
      resources :posts
      root to: "posts#index"
    end
  get 'home/index'
  resources :posts
  
  get '/about', to: "home#about"
  get '/work', to: "home#work"
  root "home#index"
end
