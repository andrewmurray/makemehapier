var hapi = require('hapi');

(async () => {
    try {
        var server = hapi.Server({
            host: 'localhost',
            port: Number(process.argv[2] || 8080)
        });
        
        server.route({
            path: '/',
            method: 'GET',
            handler: function (request, h) {
                return 'Hello hapi';
            }
        });
        
        await server.start();
        
        console.log('Server listening at:', server.info.uri);
    }
    catch (err) {
        console.log(err);
    }    
})();