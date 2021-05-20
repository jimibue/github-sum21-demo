class Sub < ApplicationRecord
    has_many :topics, dependent: :destroy
end
