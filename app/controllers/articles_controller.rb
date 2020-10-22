class ArticlesController < ApplicationController
  # GET /articles
  def index
    @articles = Article.all
    render json: @articles
  end

  # GET /article/1
  def show
    @article = Article.find(params[:id])
    render json: @article
  end

  # POST /articles
  def create
    @article = Article.create(params)
    render json: @article
  end

  # PUT /articles/1
  def update
    @article = Article.find(params[:id])
    @article.update(params)
    render json: @article
  end

  # DELETE /articles/1
  def destroy
    @article = Article.find(params[:id])
    @article.destroy
  end
end
