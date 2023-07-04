class AddMasterDeckAndRelicsToStsRuns < ActiveRecord::Migration[6.1]
  def change
    add_column :sts_runs, :master_deck, :text, default: '[]'
    add_column :sts_runs, :relics, :text, default: '[]'
  end
end

