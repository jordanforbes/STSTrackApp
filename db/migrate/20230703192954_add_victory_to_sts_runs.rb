class AddVictoryToStsRuns < ActiveRecord::Migration[7.0]
  def change
    add_column :sts_runs, :victory, :boolean
  end
end
