const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
    ten: String,
    hang: String,
    anh: String,
    gia: String,
    binh_luan: String,
    

});
const Item = mongoose.model("tb_computers", itemSchema);

module.exports = Item;