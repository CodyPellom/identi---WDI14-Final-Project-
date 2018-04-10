class User < ApplicationRecord
  has_many :correspondence, dependent: :destroy
end
