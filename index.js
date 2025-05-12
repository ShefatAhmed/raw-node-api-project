const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
const enviroment = require("./helpers/enviroments");
const app = {};
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(enviroment.port, () => {
    console.log(`Server is listening on ${enviroment.port}`);
  });
};
app.handleReqRes = handleReqRes;

app.createServer();
