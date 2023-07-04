class AddSeedToStsRuns < ActiveRecord::Migration[7.0]
  def change
    add_column :sts_runs, :seed, :string
  end
end
