# lib/tasks/refresh_runs.rake
# lib/tasks/refresh_runs.rake

namespace :refresh_runs do
  desc 'Refresh the runs by deleting all records and running the all_runs_importer script'
  task :run => :environment do
    puts "Deleting all StsRun records..."
    StsRun.delete_all

    puts "Running all_runs_importer.rb..."
    system("rails runner lib/all_runs_importer.rb")
  end
end
