import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const ordersSchema = new Schema({
  recordId: mongoose.Types.ObjectId,
  userId:  mongoose.Types.ObjectId,
  quantity: Number,
});

const Orders = model('Orders', ordersSchema, "orders");
export default Orders
//module.exports = Orders;