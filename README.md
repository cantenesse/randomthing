# Take Home Project

Challenge: A directory contains multiple files and directories of non-uniform file and directory names. Create a program that traverses a base directory and creates an index file that can be used to quickly lookup files by name, size, and content type.

# Overview
This project is a full stack Node.js + React SPA that uses a python script to index a file directory. That index file is in JSON form, which is available to the front end via an api call. The UI is uses a fuzzy-finder that allows users to easily and quickly look up files by name, size, and content types. Additionally, it shows the full path of each file. 

# Usage

The following dependencies are required to run this application: 
* `Node.js`
* `python3`
* `pip3`

Once those base dependencies are installed, you may install the server and client dependencies. From the base directory, the instructions are as follows:
* Server dependencies `npm install && pip3 install -r requirements.txt`
* Client dependencies `cd client && npm install`

Once those are installed, you can start the server and start the react environment.
* In your terminal in the client directory, run `npm start`
* Open another terminal pointed to `full-stack-indexing/server` and run `npm start`

You can access the application by going to `localhost:3000` in your browser. The contents of `server/test_data` should be fully searchable. 