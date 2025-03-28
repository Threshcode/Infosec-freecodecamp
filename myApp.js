const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes'); // ✅ Correct import
const app = helmet();
app.use('/users', userRoutes); // ✅ Correct usage

app.listen(3000, () => console.log('Server running on port 3000'));











































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`📄Useful Programmer Info Security App Started on Port ${port}`);
});
