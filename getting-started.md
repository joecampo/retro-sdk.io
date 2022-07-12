# Getting Started ⚡️
Here we'll walk you through the basics of getting started. If you'd like to read more about how this client & server work check out the [Introduction](./introduction.html) page.

To tl;dr the setup: We use this client to send HTTP RPC commands to the server and we receive data back via a Websocket
connection.

## Install & Setup
```bash
npm install retro-aol-sdk
```

After installing the package into your project, you will want to import and initialize the client.

```js
import { Client } from 'retro-aol-sdk';
```

Upon creating an instance of the client it create a session with the API server and establish a Websocket connection. The server is open source and you can read more about it in the server section.

We provide a public accessible server:
```erlang
Server: berp.retro-sdk.io
Websocket Server: socket.retro-sdk.io:443
```

The client's constructor is async, so you will want to await for it to be initialized before invoking any methods it exposes. Attempting to invoke any methods on the client before it is initialized will return them as undefined.

```js
const await new Client({
  server: 'https://berp.retro-sdk.io',
  websocketServer: 'https://socket.retro-sdk.io:443',
});
```

You may customize the ```server``` and ```websocketServer``` variables if running your own server instance in the ```protocol://hostname:port``` format. It is always *required* to pass a port for the Websocket client.

## Logging In
```js
client.login('guest');
```

Or if you have a registered screen name:
```js
client.login('AzureDiamond', 'hunter2');
```

After logging in, the server will respond with two Websocket events. First being `.set.screen.name` and second being
`.logged.on`. You can listen for these events with the client:


```typescript
client.on('.set.screen.name', (e: { screenName: string }) => {
  console.log('My screen name is: ' + e.screenName);  // tada ✨
});
```

And secondly after the authentication process has completed, we will receive the `.logged.on` event:
```typescript
client.on('.logged.on', (e: { screenName: string }) => {
  console.log('I am logged onto reAOL!');  // yay 🤠
});
```

I think it is safe to say you've got the hang of things! Use the client to send commands, and listen for responses
for each event using the client's `on` callback.

Feel free to head over to the [API](/api) and [Events](/events) sections to learn more about what commands can be sent, and what you can listen for.

 > Please note, this project is in alpha stages and we're constantly working towards feature parity with the original client.