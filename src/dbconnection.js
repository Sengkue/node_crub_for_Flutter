const mongoos = require("mongoose");
const URI = process.env.MONGODB_URL;

const dbConnection = async () => {
  await mongoos.connect(
    URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (error) => {
      if (error) return console.log("connect DB fail");
      console.log("connect DB success");
    }
  );
};

module.exports = dbConnection;
