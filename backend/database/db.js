import mongoose from "mongoose";

const db = async () => {
  //   mongoose
  //     .connect(process.env.MONGO_URI, { dbName: "PORTFOLIO" })
  //     .then(() => {
  //       console.log("Connected to DB");
  //     })
  //     .catch((error) => {
  //       console.error(`Error occurred while connecting to DB: ${error}`);
  //     });

  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`);
    console.log("Connected to DB");
  } catch (error) {
    console.error(`Error occurred while connecting to DB`);
    process.exit(0);
  }
};

export default db;
