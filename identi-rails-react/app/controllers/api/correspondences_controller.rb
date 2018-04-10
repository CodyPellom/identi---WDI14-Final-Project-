class Api::CorrespondencesController < ApplicationController
  def index
    @Correspondences = Correspondence.ApplicationController
    render json: {
      correspondences: @correspondences,
    }
  end

  def show
    @correspondence = Correspondence.find(params[:id])
    render json: {
      correspondence: @correspondence,
    }
  end

  def create
    @correspondence = Correspondence.create(correspondence_params)
    render json: {
      correspondence: @correspondence,
    }
  end

  def update
    @correspondence = Correspondence.find(params[:id])
    @correspondence.update!(correspondence_params)

    render json: {
      correspondence: @correspondence,
    }
  end

  def destroy
    Correspondence.find(params[:id]).destroy
    render json: {
      message: "Correspondence successfully destroyed",
    }
  end

  private

  def correspondence_params
    params.require(:correspondence).permit(:title, :input, :result)
  end
end
