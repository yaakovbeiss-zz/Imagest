Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :accounts, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :posts, except: [:new] do
        resources :comments, only: [:index]
    end
    resources :images, except: [:new]
    resources :comments, except: [:index]
    resources :votes, only: [:create, :update, :destroy]
    resources :search, only: [:index]
  end
end
