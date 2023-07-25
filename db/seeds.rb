# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

require_relative '../app/models/user'


User.find_each do |user|
  user.generate_authentication_token if user.authentication_token.blank?
end
