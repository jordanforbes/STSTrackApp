class AddKilledByToStsRuns < ActiveRecord::Migration[6.1]
  def change
    add_column :sts_runs, :killed_by, :string
    change_column_default :sts_runs, :victory, false

    reversible do |dir|
      dir.up do
        change_column_null :sts_runs, :killed_by, false, ''
      end

      dir.down do
        change_column_null :sts_runs, :killed_by, true, nil
      end
    end

    validate_killed_by_presence_for_failed_runs
  end

  private

  def validate_killed_by_presence_for_failed_runs
    StsRun.where(victory: false, killed_by: nil).update_all(killed_by: '')
    change_column_null :sts_runs, :killed_by, false
  end
end
