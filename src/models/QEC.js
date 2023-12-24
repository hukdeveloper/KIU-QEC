const { Schema, default: mongoose } = require("mongoose");

const qecSchema = new Schema({
  campus: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  reviews: [
    {
      quiz: {
        type: String,
        rquired: true,
      },
      count: {
        "Strongly Agree": { type: Number, required: true },
        Agree: { type: Number, required: true },
        Disagree: { type: Number, required: true },
        "Strongly Disagree": { type: Number, required: true },
      },
    },
  ],
});

const QEC = mongoose.models.QEC || mongoose.model("QEC", qecSchema);

export default QEC;
