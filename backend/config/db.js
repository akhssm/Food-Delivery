import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://fooddelivery:93985299@cluster0.jasopoo.mongodb.net/food-delivery').then(()=>console.log("DB connected"));
}