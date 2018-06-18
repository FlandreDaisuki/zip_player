const connect = require('connect');
const serveStatic = require('serve-static');
const opn = require('opn');

const app = connect();

app.use(serveStatic(__dirname + "/.."));
app.listen(12321);

opn('http://localhost:12321/test/index.html');
