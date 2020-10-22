class ArticlesController < ApplicationController
  before_action :set_article, only: [:show, :update, :destroy]
  # GET /articles
  def index
    @articles = Article.all
    render json: @articles
  end

  # GET /article/1
  def show
    render json: @article
  end

  # POST /articles
  def create
    @article = Article.new(article_params)

    if @article.save
      render json: @article, status: :created
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  # PUT /articles/1
  def update
    if @article.update(article_params)
      render json: @article
    else 
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  # DELETE /articles/1
  def destroy
    @article.destroy
  end

  private
    def set_article
      @article = Article.find(params[:id]);
    end

    def article_params
      params.require(:article).permit(:title, :author, :publication_date, :body)
    end
end
