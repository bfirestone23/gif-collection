class CollectionSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :gifs
  belongs_to :user
end
