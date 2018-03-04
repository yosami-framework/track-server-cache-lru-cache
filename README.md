# TrackServerCacheLRUCache
LRU Cache for track-server.

## Installation

### npm

```shell
npm install track-server-cache-lru-cache
```

## Usage

```javascript
const Config   = require('track-server-renderer/lib/config');
const LRUCache = require('track-server-cache-lru-cache');


Config.configure((c) => {
  c.cache = new LRUCache({max: 100, maxAge: 30 * 60 * 1000});
});
```
