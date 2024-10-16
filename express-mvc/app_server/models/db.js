let mongoose = require('mongoose');
let dbURI = "mongodb://localhost:27017/pawII-SI5C";

mongoose.connect(dbURI, {
    // useNewUrlParser: true
});
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});
mongoose.connection.on("error", (error) => {
    console.log("Connection Error :" + error);
});
