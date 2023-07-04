require 'json'
require_relative '../config/environment'

folder_path = Rails.root.join('db/runs')

json_files = Dir.glob(File.join(folder_path, '*.json'))

json_files.each do |file_path|
  json_data = File.read(file_path)
  record = JSON.parse(json_data)

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

  # if record["score_breakdown"].include?("Heartbreaker: 250")
  #   heart_kill = true
  # else
  heart_kill = false
  # end
  final_fight = record["damage_taken"].last || 0

  if final_fight["enemies"] == "The Heart" && record["victory"] == true
    heart_kill = true
  end

  puts heart_kill
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
end
