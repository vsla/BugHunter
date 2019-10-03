class CreateCompanies < ActiveRecord::Migration[6.0]
  def change
    create_table :companies do |t|
      t.string :name
      t.text :description
      t.integer :phone
      t.string :email
      t.integer :cnpj

      t.timestamps
    end
  end
end
