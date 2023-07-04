class AddMaxHpToStsRuns < ActiveRecord::Migration[7.0]
  def change
    add_column :sts_runs, :max_hp, :integer, default: 0
  end
end
