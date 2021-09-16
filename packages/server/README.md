# @fipeseeker/server

This is the HTTP server for the Fipe Seeker application.

# Requirements

This server was tested against NodeJS 14.x.x and requires a MongoDB instance.

# Start a Dev Environment

First ensure you have installed the project's dependencies with `yarn install`.
Next, copy the 'template.env' file located in the root of this package and paste
it on the same level with the name of '.env'. Now use the '.env' file to fill
in your database connection information and port you want the server to listen
on. Any information you want to use the default value of you may simply leave
blank.

You are now ready to run any of the scripts detailed below.

# Yarn Scripts

This package implements the following scripts:

  - `yarn watch` - Start the server in development mode using ts-node and
  nodemon
  - `yarn build` - Transpile the server into JS. The build is deposited in a
  directory named 'dist'
  - `yarn start` - Start the server in production mode. You must first build it.

# Documentation

The 'spec.yaml' file at the root of this package details the server's endpoints
and data schemas using the OpenAPI 3.0.0 spec (formely known as Swagger). You
may import this file into Postman or Insomnia to have quick access to the
application's routes. Additionally, once the server is running in development
mode you can use a web browser to access a rendered version of the spec on the
[http://localhost:5000/documentation.html](http://localhost:5000/documentation.html)
url.
