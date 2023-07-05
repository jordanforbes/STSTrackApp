class AddLocalTimeToStsRuns < ActiveRecord::Migration[7.0]
  def change
    add_column :sts_runs, :local_time, :integer
  end
end
