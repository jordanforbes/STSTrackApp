class ChangeLocalTimeTypeInStsRuns < ActiveRecord::Migration[7.0]
  def change
    change_column :sts_runs, :local_time, :bigint
  end
end
