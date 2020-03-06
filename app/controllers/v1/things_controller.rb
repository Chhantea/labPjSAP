class V1::ThingsController < ApplicationController
	def index
		render json: { :things=>
			[
					{
						:name=>"Some-thing",
						:guid=>'056-78-sasd-45gv'
					}
		  ]
		}.to_json
	end
end