Rails.application.routes.draw do
  # resources :sts_runs
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # get '/sts_runs', to: 'sts_runs#index'

   namespace :api do
    namespace :v1 do
      resources :sts_runs
    end
  end
end
