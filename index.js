const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
const enviroment = require("./helpers/enviroments");
const data = require("./lib/data");
const app = {};
data.create(
  "test",
  "newFile",
  { name: "bangladesh", language: "bangla" },
  (err) => {
    console.log("Error", err);
  }
);
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(enviroment.port, () => {
    console.log(`Server is listening on ${enviroment.port}`);
  });
};
app.handleReqRes = handleReqRes;

app.createServer();
