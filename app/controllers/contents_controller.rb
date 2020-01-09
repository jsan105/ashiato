class ContentsController < ApplicationController

  def index
    @contents = current_user.contents.order("created_at DESC")  #content全て表示する
    @content = Content.new  #form forのため@contentの中身を無くす
  end
  
  def new 
  end

  def create
    @content = Content.create(content_params) #privateのparamsに飛ばす

    if @content.save
      respond_to do |format|
        format.html
        format.json
      end

    else
    end

  end

  def show
    @content = Content.find(params[:id])
  end

  private
    def content_params
      params.require(:content).permit(:title, :prefectues, :image, :text).merge(user_id: current_user.id)
    end



end
