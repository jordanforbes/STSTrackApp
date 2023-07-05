task :load_all_runs do
  system 'rails runner lib/all_runs_importer.rb'
end
