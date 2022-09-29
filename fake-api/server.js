const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const fs = require('fs');

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.post('/login', (req, res) => {
  const { users } = JSON.parse(fs.readFileSync('db.json'));

  const userFound = users.find(
    (user) =>
      user.password === req.body.password && user.email === req.body.email
  );

  if (userFound) return res.jsonp(userFound);

  return res.status(401).end();
});
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});
