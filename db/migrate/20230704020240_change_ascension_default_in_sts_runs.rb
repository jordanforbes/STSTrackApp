class ChangeAscensionDefaultInStsRuns < ActiveRecord::Migration[7.0]
  def change
    change_column_default :sts_runs, :ascension, 0
  end
end
