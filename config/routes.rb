Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  root "subs#index"

  resources :subs do
    resources :topics
  end

  get '/tacos', to:'subs#tacos'
end
