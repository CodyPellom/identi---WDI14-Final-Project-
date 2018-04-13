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

  def natural_language_process
    text = params[:text]
    response = HTTParty.get("https://gateway.watsonplatform.net/natural-language-understanding/api/v1/analyze?version=2018-03-16&text=#{text}&features=concepts,entities,keywords,categories", {
      :basic_auth => {
        :username => "f51d874d-c219-456a-8141-60e4c4aa94e3",
        :password => "grUqgCiZ4QUp",
      },
    })

    render json: response
  end

  private

  def language_params
    params.require(:language).permit(:text, :relevance)
  end
end
