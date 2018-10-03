class Api::EntriesController < ApplicationController
  def index
    @entries = Entry.all
  end

  def show
    @entry = Entry.find(params[:id])
    render "api/entries/show"
  end

  def create
    @entry = Entry.new(entry_params)
    @entry.user_id = current_user.id

    if @entry.save
      render "api/entries/show"
    else
      render json: @entry.errors.full_messages, status: 422
    end
  end

  def update
    @entry = Entry.find(params[:id])

    if @album.update(entry_params)
      render "api/entries/show"
    else
      render json: @entry.errors.full_messages, status: 422
    end
  end

  def destroy
    @entry = Entry.find(params[:id])
    @entry.destroy
    render 'api/entries/show'
  end

  private

  def entry_params
    params.require(:entry).permit(:title, :body, :user_id)
  end
end
