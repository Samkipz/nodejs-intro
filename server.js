// Import http module
import http from "http";

//import file system to read external html files
import fs from "fs";

//Create the server
const server = http.createServer((req, res) => {
    console.log(req.url);
    
    // set header content type
    res.setHeader('Content-Type', 'text/html');

    // Implement a basic routing in node HTTP server
    let path = './views/';

    switch(req.url) {
        case '/':
        path += 'index.html';
        res.statusCode = 200;
        break;

        case '/about':
        path += 'about.html';
        res.statusCode = 200;
        break;

        case '/contacts':
        path += 'contacts.html';
        res.statusCode = 200;
        break;

        // Implement a redirect
        case '/get-in-touch':
        res.statusCode = 301;
        res.setHeader('Location', '/contacts');
        res.end();


        break;
        default:
        path += '404.html';
        res.statusCode = 404;
    }

    // send the html files using file system(try catch block alternative)
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        res.end(data);
    });
});

// Listen for requests
server.listen(3000, 'localhost', () => {
    console.log('Server is listening on port 3000');
});