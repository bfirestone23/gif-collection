class GifSerializer < ActiveModel::Serializer
  attributes :id, :url, :preview, :src, :title, :collection_id
  belongs_to :collection
end
