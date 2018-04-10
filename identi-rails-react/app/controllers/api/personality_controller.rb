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

  private

  def personality_params
    params.require(:personality).permit(:trait_id, :name, :category, :percentile)
  end
end
