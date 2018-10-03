# README

#### Installation/viewing instructions
To view the app build simply run bundle install to install all ruby gems and setup the database.  Next, run npm install followed by webpack --watch.  Finally, start your rails server and view the app locally on http://localhost:3000/#/.

#### Biggest issue you ran into
The biggest issue I ran into was setting up React / Redux.  Babel 7 was recently released, so I my webpack.config.js file as well as my package.json were sligthly different than how I normally set them up do to syntax change in Babel 7.

#### What your learned
I got more comfortable using rails as an API and connecting it to a React/Redux frontend.

#### What would you have done differently
I would have written more dry functions for some of my React components.  My updateTitle and updateBody functions do the same thing and should be combined.  Additionally, I would have given more time to write tests, however my React/Redux setup time took longer than anticipated.
