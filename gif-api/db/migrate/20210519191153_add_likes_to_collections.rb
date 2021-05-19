class AddLikesToCollections < ActiveRecord::Migration[6.1]
  def change
    add_column :collections, :likes, :integer, :null => false, :default => 0
  end
end