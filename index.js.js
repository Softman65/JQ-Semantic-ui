console.log('version 0.0.1')
var App = {
    _: require("lodash"),
    fs: require("fs"),
    express: require('express'),
    http: require('http'),
    path:require("path"),
    init: function (app) {
        const server = app.express()

        server.set('port', 80);

        server.use(app.express.json());
        server.use(app.express.urlencoded());
        server.use(app.express.static(app.path.join(__dirname, 'www_client/public')));

        server.get('/', function (req, res, next) {
            app.fs.readFile(app.path.join(__dirname, 'www_client/public/home.html'), function (err, html) {
                res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
                res.header('Expires', '-1');
                res.header('Pragma', 'no-cache');
                res.writeHeader(200, { "Content-Type": "text/html" });
                console.log( html.toString() )
                res.write(html);
                res.end();
            });
        })
        
       app.http.createServer(server).listen(server.get('port'), function () {
            console.log('Express server listening on port ' + server.get('port'));
        });
    }
}

App.init(App)