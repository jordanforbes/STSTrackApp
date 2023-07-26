Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'api/v1/sessions',
    registrations: 'api/v1/registrations'
  }


   namespace :api do
    namespace :v1 do
      resources :sts_runs, only: [:index,:show, :update]
    end
  end
end
