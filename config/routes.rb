Rails.application.routes.draw do
  namespace :admin do
      resources :posts

      root to: "posts#index"
    end
  get 'home/index'
  resources :posts
  
  root "home#index"
end
