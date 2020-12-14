import mongoose from "mongoose";
export default async () => {
    try {
      const conn = await mongoose.connect(
        "mongodb://localhost:27017/EmployeeDetails",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: false,
        }
      );
      console.log("Connected");
      return conn;
    } catch (err) {
      console.log("Error while connecting with MongoDB", err);
    }
  };
  