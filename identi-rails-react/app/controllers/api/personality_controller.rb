class Api::PersonalityController < ApplicationController
  def index
    @personalities = Personality.all
    render json: {
      personalities: @personalities,
    }
  end

  def show
    @personality = Personality.find(params[:id])
    render json: {
      personality: @personality,
    }
  end

  def create
    @personality = Personality.create(personality_params)
    render json: {
      personality: @personality,
    }
  end

  def update
    @personality = Personality.find(params[:id])
    @personality.update!(personality_params)

    render json: {
      personality: @personality,
    }
  end

  def destroy
    Personality.find(params[:id]).destroy
    render json: {
      message: "successfully deleted Personality trait",
    }
  end

  def personality_insights
    text = params[:text]
    response = HTTParty.post("https://gateway.watsonplatform.net/personality-insights/api/v3/profile?version=2017-10-13", {
      :body => {
        contentItems: [{
          content: text,
        }],
      }.to_json,
      :headers => {
        "Content-Type" => "application/json",
      },
      :basic_auth => {
        :username => "e803b6af-d85f-4703-b0e3-d3b196dccf28",
        :password => "5WmNaSuvNMnt",
      },
    })

    render json: response
  end

  private

  def personality_params
    params.require(:personality).permit(:trait_id, :name, :category, :percentile)
  end
end
