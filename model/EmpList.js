import mongoose from "mongoose";

const TechSchema=mongoose.Schema({
    name:{type:String}
})
const EmployeeListSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  age: {type :Number},
  location:{type:String},
  mobileno :{type :Number},
  designation:{type:String},
  technology:[TechSchema],
  image: { type: String }
});
const EmployeeList = mongoose.model("EmplyeeList",EmployeeListSchema);
export default EmployeeList;
