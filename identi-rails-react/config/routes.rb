Rails.application.routes.draw do
  namespace :api do
    resources :users do
      resources :correspondences
      resources :personality
      resources :tone
      resources :language
    end
  end
end
