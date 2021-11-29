# Server

This is an API server for your chat web application. It exposes a REST API at the following URL:

```
http://localhost:8080
```

The following endpoints are available to you:

- `/messages`
  - `GET: /messages` - Returns a list of all messages
  - `GET: /messages/:id` - Returns a message for the given ID
  - `POST: /messages` - Creates a new message
  - `PATCH: /messages/:id` - Updates a message with the given ID
  - `DELETE: /messages/:id` - Deletes a message with the given ID

All data is returned as `application/json`.

Example cURL command for getting a message:

```bash
curl --location --request GET 'http://localhost:8080/messages/f63ac9f6-e5e3-418b-9f16-1c58323eb1e9'
```

We have also provided you with a [Postman](https://www.postman.com/) collection if you wish to try out these API's.

For API contracts, please see the [type files](/packages/server/types).
