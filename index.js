const http = require("http");
const app = {};
app.configure = {
  port: 5000,
};
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.configure.port, () => {
    console.log(`Server is listing on ${app.configure.port}`);
  });
};

app.handleReqRes = (req, res) => {
  res.end("Hello World!");
};

app.createServer();
