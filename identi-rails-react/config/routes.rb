Rails.application.routes.draw do
  namespace :api do
    get "/users/nlp", to: "language#natural_language_process"
    resources :users do
      resources :correspondences
      resources :personality
      resources :tone
      resources :language
    end
  end
  # resources :users do
  #   resources :natural_language_process
  #   get :natural_language_process
  #   post :natural_language_process
  # end
end
