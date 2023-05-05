// mongodb+srv://ifromukraine2022:<password>@cluster0.exi0wfz.mongodb.net/?retryWrites=true&w=majority
const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://ifromukraine2022:sl9udfuzDD6K1SeM@cluster0.exi0wfz.mongodb.net/contacts_db?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
