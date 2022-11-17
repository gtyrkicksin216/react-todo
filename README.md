# React Todo

## Description

This is a small todo app to demonstrate CRUD operations with React, using json-server to mock the database and API. It will perform all of the operations on the db.json file. The styling is done mostly through CSS Modules for style encapsulation. Events for nested components are lifted through props to the App level. While for a small demo app, this is fine, a better option would be to utilize state mgmt to dispatch actions as opposed to lifting events through multiple components.

## Running the project

To run the project, run `yarn dev:watch`. This will run the json-server and the react app at the same time. You can run these independently if desired by running `yarn dev` for the React app, or `yarn dev:server` for the json-server in watch mode.
