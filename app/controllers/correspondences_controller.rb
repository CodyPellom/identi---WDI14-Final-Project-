class CorrespondencesController < ApplicationController
  before_action :set_correspondence, only: [:show, :update, :destroy]

  # GET /correspondences
  def index
    @correspondences = Correspondence.all

    render json: @correspondences
  end

  # GET /correspondences/1
  def show
    render json: @correspondence
  end

  # POST /correspondences
  def create
    @correspondence = Correspondence.new(correspondence_params)

    if @correspondence.save
      render json: @correspondence, status: :created, location: @correspondence
    else
      render json: @correspondence.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /correspondences/1
  def update
    if @correspondence.update(correspondence_params)
      render json: @correspondence
    else
      render json: @correspondence.errors, status: :unprocessable_entity
    end
  end

  # DELETE /correspondences/1
  def destroy
    @correspondence.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_correspondence
      @correspondence = Correspondence.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def correspondence_params
      params.require(:correspondence).permit(:title, :input, :id)
    end
end
