# HRR Glossary Builder

## Overview:
> this app "Glossary Builder" is to make the life of new engineers easier by providing definitions of tech terms.

## Usage of the App:
> This app takes short sentences as user input and returns definitions based on the info from Wikipedia Database (though DBpedia API). The front-end filters out 1,000 common words from the input and requests data back from Wikipedia Database.
The external API is specified to respond with only software-related terms.  Since the software category also includes video games related terms, anything with the category "video game" is filtered out on the back-end.

## Usage of the Repo:
> #1: initiate by running "npm install" in the terminal
> #2: run "npm run build" in the terminal to transpile
> #3: run "npm start" to start the express server (Port# is 3030)
> #4: open a browser and access "localhost:3030" to start interacting with the app.