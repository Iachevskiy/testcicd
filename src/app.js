require('dotenv').config();
const http = require('http')

const hostname = '127.0.0.1';
const port = process.env.PORT;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('first branch Hello World! NodeJS \n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


// /usr/local/cpanel/3rdparty/lib/path-bin:/opt/perl/5.32/bin:/usr/local/cpanel/3rdparty/lib/path-bin:/usr/local/bin:/usr/bin:/opt/cpanel/composer/bin:/opt/dell/srvadmin/bin
// /usr/local/cpanel/3rdparty/lib/path-bin:/opt/perl/5.32/bin:/usr/local/cpanel/3rdparty/lib/path-bin:/usr/local/jdk/bin:/usr/kerberos/sbin:/usr/kerberos/bin:/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/usr/X11R6/bin:/usr/local/bin:/usr/X11R6/bin:/root/bin:/opt/bin:/opt/cpanel/composer/bin:/opt/dell/srvadmin/bin:/home/vychevs2/.local/bin:/home/vychevs2/bin