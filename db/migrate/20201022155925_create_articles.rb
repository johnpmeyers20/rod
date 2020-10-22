class CreateArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :articles do |t|
      t.string :title, limit: 50
      t.string :author, limit: 50
      t.datetime :publication_date
      t.string :body, limit: 1000

      t.timestamps
    end
  end
end
