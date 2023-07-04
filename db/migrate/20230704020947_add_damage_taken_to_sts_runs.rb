class AddDamageTakenToStsRuns < ActiveRecord::Migration[7.0]
  def change
    add_column :sts_runs, :damage_taken, :jsonb, default: []
  end
end
