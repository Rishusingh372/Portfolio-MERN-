import mongoose from "mongoose";

const timelineSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title required!"],
  },

  description: {
    type: String,
    required: [true, "Description required!"],
  },

  timeline: {
    from: {
      type: String,
      required: [true, "Timeline starting date is required!"],
      validate: {
        validator: function (value) {
          const currentYear = new Date().getFullYear();
          return parseInt(value) <= currentYear;
        },
        message: "Starting year cannot be in the future!",
      },
    },
    to: {
      type: String,
      default: "Present",
      validate: {
        validator: function (value) {
          if (
            value !== "Present" &&
            parseInt(value) < parseInt(this.timeline.from)
          ) {
            return false;
          }
          return true;
        },
        message: "End year cannot be smaller than starting year!",
      },
    },
  },
});

export const Timeline = mongoose.model("Timeline", timelineSchema);
