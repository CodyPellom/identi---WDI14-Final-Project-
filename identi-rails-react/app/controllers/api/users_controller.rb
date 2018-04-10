class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render json: {
      users: @users,
    }
  end

  def show
    @user = User.find(params[:id])
    render json: {
      user: @user,
    }
  end

  def create
    @user = User.create(user_params)
    render json: {
      uers: @user,
    }
  end

  def update
    @user = User.find(params[:id])
    @user.update!(user_params)

    render json: {
      user: @user,
    }
  end

  def destroy
    User.find(params[:id]).destroy
    render json: {
      message: "User successfully destroyed!",
    }
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end
