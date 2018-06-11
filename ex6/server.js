var hapi = require('hapi');
var path = require('path');
var h2o2 = require('h2o2');

(async () => {
    try {
        var server = hapi.Server({
            host: 'localhost',
            port: Number(process.argv[2] || 8080)
        });
        
        await server.register(h2o2);

        server.route({
            path: '/proxy',
            method: 'GET',
            handler: {
                proxy: {
                    host: '127.0.0.1',
                    port: 65535
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