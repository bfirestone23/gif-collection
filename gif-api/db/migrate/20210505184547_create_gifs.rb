class CreateGifs < ActiveRecord::Migration[6.1]
  def change
    create_table :gifs do |t|
      t.string :url
      t.string :src
      t.string :title
      t.references :collection

      t.timestamps
    end
  end
end
