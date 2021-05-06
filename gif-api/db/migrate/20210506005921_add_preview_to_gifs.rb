class AddPreviewToGifs < ActiveRecord::Migration[6.1]
  def change
    add_column :gifs, :preview, :string
  end
end
