# TMDB Movie Search Challenge

Enter the following command while in the `webservice` directory: `node server.js`.
The webservice should now be running on port `:5730` so going to `localhost:5730` should bring up the web page.

Initially I had the API key set as an environment variable, but then I realized that that wouldn't work in this specific case where I am having you clone the repo.
The better practice is to use something like an environment variable to keep the API key secret, but I didn't know exactly how we could work around that this time. 

In the future I would probably add filtering functionality, searching by genres, have some placeholder images, and make the UI more consistent overall.
