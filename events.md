# Events 📡
Events are passed via a WebSocket from the API Server. Using the JavaScript SDK client you can listen to these events.

Example:

```js
client.on('.set.screen.name', (e) => {
  console.log('My screen name is: ' + e.screenName);
});
```

## TypeScript Support
When using TypeScript you can import the Events enum to provide IDE support.
```typescript
import { Events } from 'retro-aol-sdk/types';
```

## .logged.on
Sent once authentication with the P3OL server is complete.
* TypeScript: `Events.LOGGED_ON`
* String: `.logged.in`
### Response
```json
{
  "loggedOn": true
}
```

## .logged.off
Sent once session with P3OL has been logged off.
* TypeScript: `Events.LOGGED_OFF`
* String: `.logged.off`
### Response
```json
{
  "loggedOn": false
}
```

## .login.invalid
Sent once the P3OL server rejects the log in attempt as invalid for incorrect username or password.
* TypeScript: `Events.LOGIN_INVALID`
* String: `.login.invalid`
### Response
```json
{
  "loginInvalid": true
}
```

## .login.progress
Sent during the lifecycle of the login process to 100%.
* TypeScript: `Events.LOGIN_PROGRESS`
* String: `.login.progress`
### Response
```json
{
  "percent": 25
}
```

## .set.screen.name
Sent once your screen name has been authenticated via ReAOL. 
> Note: This event occurs *before* the .logged.in event. This is due to how authentication works with the reAOL P3 protocol.
* TypeScript: `Events.SET_SCREEN_NAME`
* String: `.set.screen.name`
### Response
```json
{
  "screenName": "GuestABC"
}
```

## .chat.room.list
Sent after requesting a list of public chat rooms using `fetchChatRooms()`. The keys of the `chatRooms` object returned on the event represents the name of the room while the value represents
> Note, there will be multiple of these events, each containing more chat rooms. Think of it as if the server is "paginating" them.

* TypeScript: `Events.CHAT_ROOM_LIST`
* String: `.chat.room.list`
### Response
```json
{
  "chatRooms": {
    "Welcome": 7,
    "pepsi": 4,
    "ixa": 10,
    "vb": 6
  }
}
```

## .new.chat.message
Sent when a new chat message is received
* TypeScript `Events.NEW_CHAT_MESSAGE`
* String: `.new.chat.message`
### Response
```json
{
    "screenName": "GuestABC",
    "message": "Hello World!"
}
```

## .new.instant.message
Sent when a new instant message is received
* TypeScript `Events.NEW_INSTANT_MESSAGE`
* String: `.new.instant.message`
### Response
```json
{
    "screenName": "GuestABC",
    "message": "Hello World!"
}
```

## .user.entered.chat
Sent once a new user has entered the chat room.
* TypeScript: `Events.USER_ENTERED_CHAT`
* String: `.user.entered.chat`
### Response
```json
{
  "screenName": "GuestABC"
}
```

## .user.left.chat
Sent once a user has left the chat room.
* TypeScript: `Events.USER_LEFT_CHAT`
* String: `.user.left.chat`
### Response
```json
{
  "screenName": "GuestABC"
}
```