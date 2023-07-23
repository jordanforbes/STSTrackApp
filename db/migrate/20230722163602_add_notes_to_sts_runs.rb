class AddNotesToStsRuns < ActiveRecord::Migration[7.0]
  def change
    add_column :sts_runs, :notes, :text
  end
end
