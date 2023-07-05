class RemoveCharacterCheckConstraintsFromStsRuns < ActiveRecord::Migration[7.0]
  def change
    remove_check_constraint :sts_runs, :character, name: 'character_check'
  end
end
