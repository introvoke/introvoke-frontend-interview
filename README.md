# Introvoke Frontend Interview

Welcome to the Introvoke frontend developer interview project! 👋

## Objective

Your assignment is to implement a chat interface using [React](https://reactjs.org/) and JavaScript. Below is an example mockup of what the chat application may look like:

| Desktop                                               | Mobile                                              |
| ----------------------------------------------------- | --------------------------------------------------- |
| ![Chat Desktop](/resources/chat_desktop.png?raw=true) | ![Chat Mobile](/resources/chat_mobile.png?raw=true) |

Feel free to use any tools to help aid you in completing this assignment.

## Tasks

- Implement using the following:
  - Language: JavaScript
  - Framework: React
- Users should be able to do the following:
  - View all current chat messages in a scrollable list
  - Enter a username to use while chatting
  - Enter a message to send to chat
  - See your message in the chat after submitting
- The chat interface should be responsive and usable within the following layouts
  - Desktop/laptop screen sizes
  - Mobile screen sizes

### Bonus

- Keep all active clients within the chat application updated in real-time
  - When one user submits their chat message, other users should be updated (hint: checkout the server router file)
- Validate your code and components through testing
  - [Jest](https://jestjs.io/) is setup in the app project as the test runner. See the `README.md` for getting started.

## Before We Begin

This project was created and tested with the following NodeJS and NPM versions:

- NodeJS v14.17
- NPM v6.14

If you have any issues installing and/or running, do the following:

1. Check your NodeJS and NPM versions, verify that these are not below the versions above.
2. If you have a higher version of either NodeJS or NPM, you will need to downgrade to the versions above.

It is highly recommended that you use a Node version manager to allow you to easily switch between different versions of Node. The following tools allow for easily switching between NodeJS versions.

- Windows: https://github.com/coreybutler/nvm-windows
- Mac/Linux: https://github.com/nvm-sh/nvm

If you continue to experience issues, please reach out for help.

## Getting Started

This project is setup using [Lerna](https://github.com/lerna/lerna) to manage multiple sub-packages. We have provided you with the following project structure:

```
packages/
  app/
  server/
```

To get started, install dependencies at the root of the project:

```
npm install
```

To start development, run the following at the root of the project:

```
npm start
```

This will run both the API server as well as the development server for your application.

### App

The `app/` package was bootstrapped with [create-react-app](https://create-react-app.dev/) to get you up and running quickly. It has a development server with hot-reloading as well as support for many of the tools and libraries you may want to use while developing your app.

For more information, see the [README.md](/packages/app/README.md) within the `app/` package for more information.

### Server

The `server/` package contains an [Express](https://expressjs.com/) webserver that hosts a REST API that you will use to get chat messages as well as post new messages.

The server exposes the following routes:

```
URL: localhost:8080

# Returns a list of all messages
GET: /messages
# Returns a single message by ID
GET: /messages/:id
# Creates a new message
POST: /messages
# Updates an existing message by ID
PATCH: /messages/:id
# Deletes a message by ID
DELETE: /messages/:id
```

Please see the [README.md](/packages/server/README.md) file within the `server/` package for more information.
