import { Schema, model } from "mongoose";

const castSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 1,
    max: 150,
  },
  born: {
    type: String,
    required: true,
    minLength: 5,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Cast = model("Cast", castSchema);

export default Cast;
