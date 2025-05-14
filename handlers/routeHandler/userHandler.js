const data = require("../../lib/data");
const { hash } = require("../../helpers/utilities");
const handler = {};

handler.userHandler = (requestProperties, callBack) => {
  const acceptedMethods = ["get", "post", "put", "delete"];
  if (acceptedMethods.indexOf(requestProperties.method) > -1) {
    handler._user[requestProperties.method](requestProperties, callBack);
  } else {
    callBack(405);
  }
};
handler._user = {};
handler._user.get = (requestProperties, callBack) => {
  
};
handler._user.post = (requestProperties, callBack) => {
    const firstName =
    typeof requestProperties.body.firstName === "string" &&
    requestProperties.body.firstName.trim().length > 0
      ? requestProperties.body.firstName
      : false;
  const lastName =
    typeof requestProperties.body.lastName === "string" &&
    requestProperties.body.lastName.trim().length > 0
      ? requestProperties.body.lastName
      : false;
  const phone =
    typeof requestProperties.body.phone === "string" &&
    requestProperties.body.phone.trim().length > 0
      ? requestProperties.body.phone
      : false;
  const password =
    typeof requestProperties.body.password === "string" &&
    requestProperties.body.password.trim().length > 0
      ? requestProperties.body.password
      : false;
  const tosAggrement =
    typeof requestProperties.body.tosAggrement === "boolean" &&
    requestProperties.body.tosAggrement.trim().length > 0
      ? requestProperties.body.tosAggrement
      : false;
  if (firstName && lastName && phone && password && tosAggrement) {
    data.read("users", phone, (err) => {
      if (err) {
        let userData = {
          firstName,
          lastName,
          phone,
          password: hash(password),
          tosAggrement,
        };
        data.create("users", phone, userData, (err) => {
          if (!err) {
            callBack(200, {
              message: "User created successfully",
            });
          } else {
            callBack(500, {
              error: "Could not create the user",
            });
          }
        });
      } else {
        callBack(500, {
          error: "Could not read the user data",
        });
      }
    });
  } else {
    callBack(400, {
      message: "You have a problem with your request",
    });
  }
};
handler._user.put = (requestProperties, callBack) => {};
handler._user.delete = (requestProperties, callBack) => {};
module.exports = handler;
