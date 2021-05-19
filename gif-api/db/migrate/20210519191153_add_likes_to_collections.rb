class AddLikesToCollections < ActiveRecord::Migration[6.1]
  def change
    add_column :collections, :likes, :integer
  end
end
