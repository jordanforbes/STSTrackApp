namespace :load_all_runs do
  task :u => :environment do
    puts "Running unique_importer.rb"
    system('rails runner lib/unique_importer.rb')
  end
  task :r => :environment do
    puts "Deleting all StsRun records..."
    StsRun.delete_all

    puts "Running all_runs_importer.rb..."
    system("rails runner lib/all_runs_importer.rb")
  end
end
