var hapi = require('hapi');
var path = require('path');
var vision = require('vision');

(async () => {
    try {
        var server = hapi.Server({
            host: 'localhost',
            port: Number(process.argv[2] || 8080)
        });
        
        await server.register(vision);

        server.views({
            engines: {
                html: require('handlebars')
            },
            path: path.join(__dirname, 'templates')
        });

        server.route({
            path: '/',
            method: 'GET',
            handler: {
                view: "index.html"
            }
        });
        
        await server.start();
        
        console.log('Server listening at:', server.info.uri);
    }
    catch (err) {
        console.log(err);
    }    
})();