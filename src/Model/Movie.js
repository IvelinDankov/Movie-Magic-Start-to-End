import { Schema, model, Types } from "mongoose";

const movieSchema = new Schema({
  title: {
    type: String,
  },
  genre: {
    type: String,
    lowercase: true,
  },

  director: {
    type: String,
  },
  year: {
    type: Number,
    min: 1900,
    max: 2050,
  },
  imageUrl: {
    type: String,
  },

  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  description: {
    type: String,
    min: 10,
    max: 300,
  },
  casts: [
    {
      type: Types.ObjectId,
      ref: "Cast",
    },
  ],
  owner: [
    {
      type: Types.ObjectId,
      ref: "User",
    },
  ],
});

const Movie = model("Movie", movieSchema);

export default Movie;
