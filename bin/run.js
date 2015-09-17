var tty = require('tty.js');

var app = tty.createServer({
  shell: 'lxc-attach',
  shellArgs: ["-n", "lab001_PC_1"],

    users: {
        foo: 'bar'
          },
            port: 8000
            });

            app.get('/foo', function(req, res, next) {
              res.send('bar');
              });

              app.listen();

