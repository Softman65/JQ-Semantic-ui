console.log('version 0.0.1')
var App = {
    _: require("lodash"),
    fs: require("fs"),
    express: require('express'),
    http: require('http'),
    path:require("path"),
    responses:{
        getList:function(){
            return JSON.stringify([{item:'uno'},{item:'dos'},{item:'tres'}])
        },
        getListIcon:function(){
            //debugger
            return JSON.stringify([{item:'uno',icon:'user'},{item:'dos',icon:'search'},{item:'tres',icon:'linkify'}])
        },
        getListTree:function(){
            //debugger
            return JSON.stringify([
                {item:'uno',icon:'folder icon',a:[ 
                        {a:'texto uno',html:'texto UNO',data:'uno'}, 
                        {div:'desc uno',html:'desc uno'},
                        {content:[
                            {item:'',icon:'folder icon',a:[ 
                                {a:'',html:'texto UNO',data:'uno'}, 
                                {div:'',html:'desc 1.1'} ]}
                            ]
                        }
                    ]
                },
                {item:'dos',icon:'large github middle aligned icon',a:[ 
                    {a:'texto dos',html:'texto DOS',data:'dos'}, 
                    {div:'desc dos',html:'desc dos'}]
                },{item:'tres',icon:'large github middle aligned icon',a:[ 
                    {a:'texto',html:'texto TRES',data:'tres'}, 
                    {div:'desc',html:'desc tres' }]
                }
            ])
        },
        getListIconRelaxed:function(){
            //debugger
            return JSON.stringify([
                {item:'uno',icon:'large github middle aligned icon',a:[ 
                    {a:'texto uno',html:'texto UNO',data:'uno'}, 
                    {div:'desc uno',html:'desc uno'}]
                },
                {item:'dos',icon:'large github middle aligned icon',a:[ 
                    {a:'texto dos',html:'texto DOS',data:'dos'}, 
                    {div:'desc dos',html:'desc dos'}]
                },{item:'tres',icon:'large github middle aligned icon',a:[ 
                    {a:'texto',html:'texto TRES',data:'tres'}, 
                    {div:'desc',html:'desc tres' }]
                }
            ])
        }
    },
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
        server.get('/API/*', function (req, res, next) {
            if(app.responses[ req.originalUrl.split("/")[req.originalUrl.split("/").length-1] ])
                res.write(app.responses[ req.originalUrl.split("/")[req.originalUrl.split("/").length-1] ]() )
        
            res.end();
        })
        app.http.createServer(server).listen(server.get('port'), function () {
            console.log('Express server listening on port ' + server.get('port'));
        });
    }
}

App.init(App)