set :application, "textile-area"

set :deploy_to, "/var/www/apps/#{application}"

set :port, 33333
set :location, "209.20.86.103"
role :app, location
role :web, location
role :db,  location, :primary => true