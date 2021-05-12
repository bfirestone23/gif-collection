class AddUserToCollection < ActiveRecord::Migration[6.1]
  def change
    add_reference :collections, :user
  end
end
