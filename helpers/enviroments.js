const enviroments = {};
enviroments.staging = {
  port: 3000,
  envName: "staging",
};
enviroments.production = {
  port: 5000,
  envName: "production",
};

const currentEnvrioment =
  typeof process.env.NODE_ENV === "string" ? process.env.NODE_ENV : "staging";

const enviromentToExport =
  typeof enviroments[currentEnvrioment] === "object"
    ? enviroments[currentEnvrioment]
    : enviroments.staging;

module.exports = enviromentToExport;
