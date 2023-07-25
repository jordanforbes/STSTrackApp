class User < ApplicationRecord

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
        #  :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist


  def generate_authentication_token
    self.authentication_token = Devise.friendly_token
    save!
  end
end
