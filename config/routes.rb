Rails.application.routes.draw do
	root 'static#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
 namespace :v1,defaults: {format:'json'} do
 	get  'things', to:'things#index'
 end

  # forward all request to static:Controller
  # must be accept non ajax request
  get '*page',to: 'static#index',constrains:->(req) do
     !req.xhr? && req.format.html?
  end
end
