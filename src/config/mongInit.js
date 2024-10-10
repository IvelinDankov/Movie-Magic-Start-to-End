
import mongoose from "mongoose";

export function mongInit() {
    try {
      mongoose.connect("mongodb://localhost:27017/magic-movies");
      console.log("Successfully connected to DB....");
    } catch (error) {
      console.error.bind(console, "connection error:");
    }
    
}