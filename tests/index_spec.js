const t        = require('track-spec');
const LRUCache = require('../lib/index');

t.describe('LRUCache', () => {
  let cache = null;

  t.beforeEach(() => {
    cache = new LRUCache({max: 100, maxAge: 30 * 60 * 1000});
  });

  t.describe('#set and #get', () => {
    t.it('Cache value', () => {
      cache.set('hoge', 'HOOOGEEEE');
      t.expect(cache.get('hoge')).equals('HOOOGEEEE');
    });
  });
});
