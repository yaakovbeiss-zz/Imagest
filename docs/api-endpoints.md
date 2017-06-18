# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Accounts

- `GET /accounts/new`
- `POST /accounts`
- `PATCH /accounts`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Posts

- `GET /api/posts`
- `POST /api/posts`
- `GET /api/posts/:id`
- `PATCH /api/posts/:id`
- `DELETE /api/posts/:id`

### Comments

- `GET /api/posts/:postId/comments`
- `POST /api/posts/:postId/comments`
- `GET /apiposts/:postId/comments/:commentId`
- `PATCH /apiposts/:postId/comments/:commentId`
- `DELETE /apiposts/:postId/comments/:commentId`

### Votes

- `GET /api/votes/:voteId`
- `POST /api/votes/:voteId`
- `GET /api/votes/:voteId`
- `PATCH /api/votes/:voteId`
- `DELETE /api/votes/:voteId`
