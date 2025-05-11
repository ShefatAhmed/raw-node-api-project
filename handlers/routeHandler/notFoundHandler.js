const handler = {};
handler.notFoundHandler = (requestProperties, callBack) => {
  callBack(404 , {
    message: "404 not found"
  });
};
module.exports = handler;
