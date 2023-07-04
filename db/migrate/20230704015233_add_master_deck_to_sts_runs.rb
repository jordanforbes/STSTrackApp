class AddMasterDeckToStsRuns < ActiveRecord::Migration[7.0]
  def change
    add_column :sts_runs, :master_deck, :text, default: '[]'
  end
end
