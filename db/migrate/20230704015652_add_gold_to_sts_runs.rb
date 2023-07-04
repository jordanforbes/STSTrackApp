class AddGoldToStsRuns < ActiveRecord::Migration[7.0]
  def change
    add_column :sts_runs, :gold, :integer, default: 0
  end
end
