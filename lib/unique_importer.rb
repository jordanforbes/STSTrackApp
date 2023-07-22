
require 'json'
require 'bigdecimal'
require_relative '../config/environment'
# cycles through json files in folders, parses them, and uploads them to the db

# command to use:
# rails runner lib/all_runs_importer.rb

# rake task:
# rake refresh_runs:run


# TODO: prevent duplicates from being uploaded

# should check to make sure that duplicate run ids don't exist

folder_path = Rails.root.join('db/runs')

puts "unique runs importer"

# for each folder in folder
Dir.foreach(folder_path) do |entry|
  # puts entry
  next unless File.directory?(File.join(folder_path, entry))

  # gets current folder
  folder = File.join(folder_path, entry)
  # puts folder


  json_files = Dir.glob(File.join(folder, '*.json'))
  # puts json_files
  # for each json file
  json_files.each do |file_path|

    # read the data in the json file
    json_data = File.read(file_path)
    # parse the json data into an object
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

    # Check if a record with the same play_id or run_id exists in the database
        # Check if a record with the same play_id or run_id exists in the database
    if StsRun.exists?(play_id: mapped_records[:play_id])
      # puts "Skipping duplicate record with play_id: #{mapped_records[:play_id]} or run_id: #{mapped_records[:run_id]}"
    else
      # Create the record if it's not a duplicate

      StsRun.create(mapped_records)
      puts "uploading unique record with play_id: #{mapped_records[:play_id]}"
    end
  end
end
