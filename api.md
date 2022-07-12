# API 🔌
Commands are sent from the client SDK to the API server via HTTP. The client abstracts all of that for you.

Example:

```js
client.joinChat('Welcome');

client.sendChatMessage('hello world!');
```

## login
Begin a session with Re-AOL. 
* Response: HTTP Status `201`
> Note: If you already have an active session and attempt to login again the server will return HTTP Status `418`

### Usage
```js
client.login('guest');
```
#### Log in with Screen Name
```js
client.login('AzureDiamond', 'hunter2')
```

#### Working With Errors
For logging into an incorrect username/passwords the client will return a `LOGIN_INVALID` WebSocket event. However, validation errors can be caught with the `login` method (e.g. username is too long or password is too short).
##### Validation
```typescript
client.login('IlIIIIIIlllIIIIll', 'hunter2').catch((e: Error) => {
  console.log(e.message); 
  // ^-- The username must not be greater than 16 characters.
});
```
##### Invalid Event
```typescript
client.on('.login.invalid', () => {
  console.log('The screen name or password you have entered is invalid.');
});
```
### Interface
```typescript
login(username: string, password?: string): Promise<any>;
```

## logoff
Begin a session with Re-AOL. 
* Response: HTTP Status `200`
### Usage
```js
client.logoff();
```
### Interface
```typescript
logoff(): Promise<any>;
```

## on
Register an Event callback for a WebSocket event.
### Usage
```js
client.on('.set.screen.name', (e) => {
  console.log('My screen name is: ' + e.screenName);
});
```
### Interface
```typescript
on(event: Events | string, callback: any): void;
```

## fetchChatRooms
Fetch a list of public chat rooms. The listing of chat rooms will be sent back using the `.chat.room.list` event.
### Usage
```js
client.fetchChatRooms();
```
### Interface
```typescript
fetchChatRooms(): Promise<any>;
```

## joinChatRoom
Join a public chat room on Re-AOL.
* Response: HTTP Status `200`
### Usage
```js
client.joinChatRoom('Welcome');
```
### Interface
```typescript
joinChatRoom(roomName: string): Promise<any>;
```

## leaveChatRoom
Leave a chat room on Re-AOL.
* Response: HTTP Status `200`
### Usage
```js
client.leaveChatRoom('Welcome');
```
### Interface
```typescript
leaveChatRoom(roomName: string): Promise<any>;
```

## sendChatMessage
Begin a session with Re-AOL. 
* Response: HTTP Status `201`
### Usage
```js
client.sendChatMessage('Hello World!');
```
### Interface
```typescript
sendChatMessage(message: string): Promise<any>;
```

## sendInstantMessage
Send an instant message to user.
* Response: HTTP Status `201`
### Usage
```js
client.sendInstantMessage('DomainKing', 'I have some cool .tk domains');
```
### Interface
```typescript
sendInstantMessage(screenName: string, message: string): Promise<any>;
```

## getToken
Get your current Personal Access Token.
### Usage
```js
client.getToken();
```
### Interface
```typescript
getToken(): string | undefined;
```

## getSessionId
Get your current API server session id.
### Usage
```js
client.getSessionId();
```
### Interface
```typescript
getSessionId(): string | undefined;
```
