const routes = [
    {
        method: 'POST',
        path: '/user',
        handler: (request, h) => {
            // const response = h.response('success');
            // response.type('text/plain');
            // response.header('Custom-Header', 'some-value');
            // return response;
            
            // return h.response('success')
            //     .type('text/plain')
            //     .header('Custom-Header', 'some-value');

            return h.response('created').code(201);
        },
    }
    {
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            const { username, password } = request.payload;
            return `Welcome ${username}!`;
        },
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = "stranger" } = request.params;
            const { lang } = request.query;

            if(lang === 'id') {
                return `Hai, ${name}!`;
            }

            return `Hello, ${name}!`;
        }
    },
    {
        method: 'GET',
        path: '/users/{username?}',
        handler: (request, h) => {
            const { username = 'stranger' } = request.params;    
            return `Hello, ${username}!`;
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method';
        },
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },
];
 
module.exports = routes;