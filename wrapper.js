// CoffeeScript (JS) wrapper for SocketStream 0.3

var fs = require('fs'),
    gorillascript = require('gorillascript');

function throwLater(err) {
  process.nextTick(function () {
    throw err;
  });
}

exports.init = function(root, config) {
  return {

    name: 'GorillaScript',

    extensions: ['gs'],

    assetType: 'js',

    contentType: 'text/javascript; charset=utf-8',

    compile: function(path, options, cb) {
      fs.readFile(path, 'utf8', function (err, text) {
        if (err) {
          throw err;
        }

        gorillascript.compile(text, {filename: path, bare: true}).then(
          function (result) {
            cb(result.code);
          },
          function (err) {
            cb("Unable to compile GorillaScript: " + String(err.stack || err));
            // throwLater is necessary because otherwise the promise will catch it
            throwLater(err);
          });
      });
    }
  };
};