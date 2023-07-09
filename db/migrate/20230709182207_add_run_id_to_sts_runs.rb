class AddRunIdToStsRuns < ActiveRecord::Migration[7.0]
  def change
    add_column :sts_runs, :run_id, :string
  end
end
