const mongoose = require("mongoose");

const symptomsSchema = new mongoose.Schema({
  symptom: String,
});

const vaccineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  symptoms: { symptomsSchema },
  severity: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Vaccine", vaccineSchema);
