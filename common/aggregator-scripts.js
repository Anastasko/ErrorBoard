var aggregate = require('./aggregate');
var reduceTimestamps = require('./reduce-timestamps');
var reduceBrowsers = require('./reduce-browsers');

module.exports = aggregate({
    groupBy: function(item) {
        return item.url + ':' + (item.line || 0);
    },
    create: {
        count: 0,
        browsers: []
    },
    each: function(obj, next) {
        obj.count += 1;

        reduceTimestamps(obj, next);
        reduceBrowsers(obj, next);
    }
});
