class AddAscensionToStsRuns < ActiveRecord::Migration[7.0]
  def change
    add_column :sts_runs, :ascension, :integer
    execute <<-SQL
      ALTER TABLE sts_runs ADD CONSTRAINT check_ascension_range CHECK (ascension >= 0 AND ascension <=20)
    SQL
  end
end
