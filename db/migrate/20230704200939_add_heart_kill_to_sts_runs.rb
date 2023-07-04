class AddHeartKillToStsRuns < ActiveRecord::Migration[7.0]
  def change
    add_column :sts_runs, :heart_kill, :boolean, default:false
  end
end
