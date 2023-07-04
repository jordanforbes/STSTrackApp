require 'json'
require_relative '../config/environment'

file_path = Rails.root.join('db/runs', 'run2.json')
json_data = File.read(file_path)
record = JSON.parse(json_data)

# records.each do |record|
  # if record["score_breakdown"].include?("Heartbreaker: 250")
  #   heartbreaker = true
  # else
  #   heartbreaker = false
  # end
puts "debug reached!!!!!!!"
# neow_bonuses_skipped_log = record["neow_bonuses_skipped_log"]
# if neow_bonuses_skipped_log.is_a?(Array)
#   puts neow_bonuses_skipped_log.join(", ")
# else
#   puts neow_bonuses_skipped_log
# end
max_hp_per_floor = record["max_hp_per_floor"] || []  # Ensure max_hp_per_floor is an array
max_hp = max_hp_per_floor.last || 0  # Get the last element or use 0 if the array is empty

if record["character_chosen"] == "DEFECT"
  character = "Defect"
elsif record["character_chosen"] == "IRONCLAD"
  character = "Ironclad"
elsif record["character_chosen"] == "SILENT"
  character = "Silent"
else
  character = "Watcher"
end

if record["score_breakdown"].include?("Heartbreaker: 250")
  heart_kill = true
else
  heart_kill = false
end

mapped_records = {
  character: character,
  floor: record["floor_reached"],
  victory: record["victory"],
  killed_by: record["victory"] ? nil : record["killed_by"],
  ascension: record["ascension_level"],
  gold: record["gold"],
  max_hp: max_hp,
  damage_taken: record["damage_taken"],
  master_deck: "[" + record["master_deck"].join(", ") + "]",
  relics: "[" + record["relics"].join(", ") + "]",
  seed: record["seed_played"],
  heart_kill: heart_kill
}

StsRun.create(mapped_records)
# end
