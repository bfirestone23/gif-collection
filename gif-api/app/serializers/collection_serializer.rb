class CollectionSerializer < ActiveModel::Serializer
  attributes :id, :name, :likes
  has_many :gifs
  belongs_to :user
end
