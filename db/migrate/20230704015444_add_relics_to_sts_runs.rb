class AddRelicsToStsRuns < ActiveRecord::Migration[7.0]
  def change
    add_column :sts_runs, :relics, :text, default:'[]'
  end
end
