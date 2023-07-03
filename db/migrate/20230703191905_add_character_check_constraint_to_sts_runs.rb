class AddCharacterCheckConstraintToStsRuns < ActiveRecord::Migration[7.0]
  def change
    execute <<-SQL
      ALTER TABLE sts_runs
      ADD CONSTRAINT character_check
      CHECK (character IN ('Ironclad','Defect','Silent','Watcher'))
    SQL
  end
end
