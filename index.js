const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
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
app.handleReqRes = handleReqRes;

app.createServer();
