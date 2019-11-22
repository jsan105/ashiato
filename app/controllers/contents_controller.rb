class ContentsController < ApplicationController

  def index
    @contents = Content.all  #content全て表示する
    @content = Content.new  #form forのため@content内を無くす
  end
  
  def new 
  end

  def create
    @content = Content.create(content_params) 
    @content.save
  end

  def show
  end

  private
    def content_params
      params.require(:content).permit(:visited, :image, :text).merge(user_id: current_user.id)
    end

end
