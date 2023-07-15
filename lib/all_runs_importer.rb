
require 'json'
require 'bigdecimal'
require_relative '../config/environment'
# cycles through json files in folder, parses them, and uploads them to the db

# command to use:
# rails runner lib/all_runs_importer.rb

# TODO: prevent duplicates from being uploaded

folder_path = Rails.root.join('db/runs')

puts "all runs importer"

json_files = Dir.glob(File.join(folder_path, '*.json'))

json_files.each do |file_path|
  json_data = File.read(file_path)
  record = JSON.parse(json_data)

  max_hp_per_floor = record["max_hp_per_floor"] || []  # Ensure max_hp_per_floor is an array
  max_hp = max_hp_per_floor.last || 0  # Get the last element or use 0 if the array is empty

  # checks the final fight which the character had before the run ended
  final_fight = record["damage_taken"].last || {"damage"=>0, "enemies"=>"None", "floor"=>0, "turns"=>0}
  # if the last fight was the heart, and the character won the run, then obviously they killed the heart
  heart_kill = false

  # puts final_fight
  if final_fight["enemies"] == "The Heart" && record["victory"] == true
    heart_kill = true
  end

  # puts heart_kill

  mapped_records = {
    character: record["character_chosen"] == 'THE_SILENT'? 'SILENT' : record["character_chosen"],
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
    heart_kill: heart_kill,
    local_time: BigDecimal(record["local_time"]),
    play_id: record["play_id"],
    run_id: record["run_id"]
  }

  StsRun.create(mapped_records)
end
