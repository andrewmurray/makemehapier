var hapi = require('hapi');
var inert = require('inert');
var path = require('path');

(async () => {
    try {
        var server = hapi.Server({
            host: 'localhost',
            port: Number(process.argv[2] || 8080),
            routes: {
                files: {
                    relativeTo: __dirname
                }
            }
        });
        
        await server.register(inert);

        server.route({
            path: '/',
            method: 'GET',
            handler: {
                file: 'index.html'
            }
        });
        
        await server.start();
        
        console.log('Server listening at:', server.info.uri);
    }
    catch (err) {
        console.log(err);
    }    
})();