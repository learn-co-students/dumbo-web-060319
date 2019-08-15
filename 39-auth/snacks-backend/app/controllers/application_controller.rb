class ApplicationController < ActionController::API

  def authorized?(user_id)
    token = try_get_jwt_token
    return token.present? && token["user_id"] == user_id.to_i
  end

  def authenticated?
    try_get_jwt_token.present?
  end

  private 


  def try_get_jwt_token
  token = request.headers["Authorization"]
    if token.present?
      begin
        decoded_token = JWT.decode(token, ENV["JWT_SECRET_KEY"], true, { algorithm: 'HS256' })
      rescue JWT::VerificationError
        return nil
      end
      return decoded_token.first
    else
      nil
    end
  end



end
