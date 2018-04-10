class Api::ToneController < ApplicationController
  def index
    @tones = Tone.all
    render json: {
      tones: @tones,
    }
  end

  def show
    @tone = Tone.find { params[:id] }
    render json: {
      tone: @tone,
    }
  end

  def create
    @tone = Tone.create(tone_params)
    render json: {
      tone: @tone,
    }
  end

  def update
    @tone = Tone.find(params[:id])
    @tone.update!(tone_params)

    render json: {
      tone: @tone,
    }
  end

  def destroy
    Tone.find(params[:id]).destroy
    render json: {
      message: "successfully deleted Tone trait",
    }
  end

  private

  def tone_params
    params.require
    (:tone).permit(:score, :tone_name, :tone_id)
  end
end
