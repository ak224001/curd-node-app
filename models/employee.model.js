const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "required"
  },
  email: {
    type: String,
    required: "required"

  },
  Age: {
    type: Number,
    required: "required"
  },
  mobile: {
    type: Number,
    required: "required"
  },
  city: {
    type: String,
    required: "required"
  },
});
const employee = mongoose.model("Employee", employeeSchema);
module.exports = employee;