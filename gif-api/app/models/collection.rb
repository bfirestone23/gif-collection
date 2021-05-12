class Collection < ApplicationRecord
    has_many :gifs
    belongs_to :user
end
