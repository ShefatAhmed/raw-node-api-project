const handler = {};
handler.sampleHandler = (requestProperties, callBack) => {
  console.log(requestProperties);
  callBack(200, {
    message: "This is sample handler",
  });
};
module.exports = handler;
