import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    items: {type: Array, required: true},
    amount: {type: Number, required: true},
    addres: {type: Object, required: true},
    status: {type: String, required: "Food Processing"},
    date: {type: Date, default: Date.now()},
    payment: {type: Boolean, default: false}
})

const orderModel = mongoose.models.order || mongoose.model("model", orderSchema);
export default orderModel;