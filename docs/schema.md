# Schema Information

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
points      | integer   | not null, default: 0
author_id   | integer   | not null, foreign key (references users), indexed

## images
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
post_id     | string    | not null, foreign key (references posts), indexed
image_url   | string    | not null
title       | string    | not null
description | text      |

## comments
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
body              | string    | not null
points            | integer   | not null, default: 0
parent_id         | integer   |
commenter_id      | integer   | not null, foreign key (references users), indexed
commentable_id    | string    | not null, foreign key (references commentables), indexed
commentable_type  | string    | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## votings
column name     | data type | details
----------------|-----------|-----------------------
voter_id        | integer   | not null, foreign key
votable_id      | integer   | not null, foreign key
votable_type    | string    | not null
