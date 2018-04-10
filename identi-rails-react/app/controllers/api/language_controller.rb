class Api::LanguageController < ApplicationController
  def index
    @languages = Language.all
    render json: {
      languages: @languages,
    }
  end

  def show
    @language = Language.find(params[:id])
    render json: {
      language: @language,
    }
  end

  def create
    @language = Language.create(language_params)
    render json: {
      language: @language,
    }
  end

  def update
    @language = Language.find(params[:id])
    @language.update!(language_params)

    render json: {
      language: @language,

    }
  end

  def destroy
    Language.find(params[:id]).destroy
    render json: {
      message: "Language trait successfully destroyed!",
    }
  end

  private

  def language_params
    params.require(:language).permit(:text, :relevance)
  end
end
