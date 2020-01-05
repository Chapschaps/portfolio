Rails.application.routes.draw do
  root to: 'pages#home'
  get 'projets', to: 'pages#projets', as: :projets
  get 'contact', to: 'pages#contact', as: :contact
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
