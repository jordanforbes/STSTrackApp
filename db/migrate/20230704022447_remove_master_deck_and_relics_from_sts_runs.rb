class RemoveMasterDeckAndRelicsFromStsRuns < ActiveRecord::Migration[7.0]
  def change
    remove_column :sts_runs, :master_deck, :text
    remove_column :sts_runs, :relics, :text
  end
end
