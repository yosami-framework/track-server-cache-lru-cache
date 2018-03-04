const CacheBase = require('track-server-renderer/lib/cache_base');
const LRUCache  = require('lru-cache');

/**
 * LRU Cache.
 */
class Cache extends CacheBase {
  /**
   * Initialize cache
   * @param {object} options Options
   */
  constructor(options) {
    super();
    this._cache = new LRUCache(options);
  }

  /**
   * Get cache data.
   * @override
   * @param {string} key Cache key.
   * @return {object} Value. (null if is not existed)
   */
  get(key) {
    return this._cache.get(key);
  }

  /**
   * Set cache data.
   * @abstract
   * @param {string} key Cache key.
   * @param {object} value Value.
   */
  set(key, value) {
    this._cache.set(key, value);
  }
}

module.exports = Cache;
