const http = require('http')

const requestListener = (request, response) => {
        response.setHeader('Content-Type', 'text/html');
        response.statusCode = 200;
     
        const { method,url } = request;

        if (url === "/") {
            // Logika respons bila url bernilai '/'
            if (method === 'GET') {
                response.end('<h1>Ini adalah homepage</h1>');
            } else {
                response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
            }
        } else if (url === "/about") {
            // Logika respons bila url bernilai '/about'
            if (method === 'GET') {
                response.end('<h1>Halo! Ini adalah halaman about</h1>');
            } else {
                response.end(`<h1>Halaman '/about' tidak dapat diakses dengan ${method} request</h1>`);
            }
        } else {
            // Logika respons bila url bukan '/' atau '/about'
            response.end('<h1>Halaman tidak ditemukan</h1>');
        }
        console.log(url)
    }
     
        // if(method === 'GET') {
        //     response.end('<h1>Hello!</h1>');
        // }
     
        // if(method === 'POST') {
        //     let body = [];
        
        //     request.on('data', (chunk) => {
        //         body.push(chunk);
        //     });
     
        //     request.on('end', () => {
        //         body = Buffer.concat(body).toString();
        //         const { name } = JSON.parse(body);
        //         response.end(`<h1>Hai, ${name}!</h2>`);
        //     });
        // }


const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
})