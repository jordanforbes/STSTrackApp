class AlterKilledByColumnInStsRuns < ActiveRecord::Migration[6.0]
  def change
    reversible do |dir|
      dir.up do
        execute <<~SQL
          UPDATE sts_runs
          SET killed_by = NULL
          WHERE victory = TRUE
        SQL
      end

      dir.down do
        execute <<~SQL
          UPDATE sts_runs
          SET killed_by = ''
          WHERE victory = TRUE
        SQL
      end
    end

    change_column_null :sts_runs, :killed_by, true, nil
  end
end
