# README

# H1 Imagest

[Imagest live](https://imagest.herokuapp.com/#/)

Imagest is a full-stack web application clone of the popular image sharing site imgur.com. Imagest utilizes Ruby on Rails for the backend, a PostgreSQL database, and React.js alongside Redux for the frontend framework.

#H2 Features & Implementation

#H3 Account Creation - Frontend and Backend Authentication

Users can create an account which is stored in the database. Only users who are signed up can create posts and comment and posts or comments. This is implemented on the the frontend and backend:
Frontend - a Session Reducer keeps track of the current user slice of state. The current user is bootstrapped to the window and the Store is preloaded with that users information allowing the user to see his information immediately.
Backend - Users enter a password which stores a password-digest token in the database (using BCrypt library to generate secure passwords). User password information is not stored in the database. A session token is generated and stored in the database and is used to match the session token in the browser cookies to allow to user to remain logged in after closing the browser.

#H3 Creating a Post

Posting images is a main feature of Imagest. Logged in users can upload images and give them a title and description. Once uploaded, other users can upvote or downvote.

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
# Imgur
