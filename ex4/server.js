var hapi = require('hapi');
var inert = require('inert');
var path = require('path');

(async () => {
    try {
        var server = hapi.Server({
            host: 'localhost',
            port: Number(process.argv[2] || 8080)
        });
        
        await server.register(inert);

        server.route({
            path: '/foo/bar/baz/{file}',
            method: 'GET',
            handler: {
                directory: {
                    path: path.join(__dirname, './public')
                }
            }
        });
        
        await server.start();
        
        console.log('Server listening at:', server.info.uri);
    }
    catch (err) {
        console.log(err);
    }    
})();