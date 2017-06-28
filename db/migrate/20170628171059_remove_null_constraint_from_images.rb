class RemoveNullConstraintFromImages < ActiveRecord::Migration[5.0]
  def change
    change_column_null :images, :title, true
  end
end
