# GorillaScript (JS) wrapper for SocketStream 0.3

Allows you to use [GorillaScript](http://ckknight.gorillascript.io/gorillascript) files (.gs) in your SocketStream project.


### Instructions

Add `ss-gorilla` to your application's `package.json` file and then add this line to app.js:

```javascript
ss.client.formatters.add(require('ss-gorilla'));
```
