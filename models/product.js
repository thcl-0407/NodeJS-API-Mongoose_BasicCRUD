const mongoose = require('mongoose')
const Schema  = mongoose.Schema

const productSchema = new Schema({
    tenSanPham: {
        type: String
    },
    loaiSanPham: {
        type: String
    },
    giaSanPham: {
        type: Number
    }
})

module.exports = mongoose.model('SanPhams', productSchema)