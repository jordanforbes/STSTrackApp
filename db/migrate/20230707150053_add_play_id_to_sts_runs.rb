class AddPlayIdToStsRuns < ActiveRecord::Migration[7.0]
  def change
    add_column :sts_runs, :play_id, :string
  end
end
