const SanPham = require('../models/product.js')

const AddProduct = (data, callback)=>{
    const sp = new SanPham(data);

    sp.save((err, sp)=>{
        if(!err){
            callback(200, true, "Thêm Thành Công")
        }else{
            callback(400, false, "Có Lỗi Xảy Ra Khi Thêm Sản Phẩm")
        }
    })
}

const GetProducts = (callback)=>{
    SanPham.find({}, (err, res)=>{
        if(err){
            callback(400, false, "Error")
        }else{
            callback(200, true, res)
        }
    })
}

const GetProduct_ByName = (name, callback)=>{
    SanPham.find({ tenSanPham: { $regex: name } }, (err, res)=>{
        if(err){
            callback(400, false, "Error")
        }else{
            callback(200, true, res)
        }
    })
}

const RemoveProduct = (id, callback)=>{
    SanPham.deleteOne({ _id: id }, (err, res)=>{
        if(err){
            callback(400, false, "Có Lỗi Xảy Ra Khi Xoá Sản Phẩm")
        }else{
            callback(200, true, "Đã Xoá Sản Phẩm")
        }
    })
}


const UpdateProduct = (data, callback)=>{
    SanPham.updateOne({ _id: data.id }, {
        tenSanPham : data.tenSanPham,
        loaiSanPham : data.loaiSanPham,
        giaSanPham : data.giaSanPham 
    } ,(err, res)=>{
        if(err){
            callback(400, false, "Có Lỗi Xảy Ra Khi Cập Nhật Sản Phẩm")
        }else{
            callback(200, true, "Cập Nhật Sản Phẩm Thành Công")
        }
    })
}


module.exports = {
    AddProduct,
    GetProducts,
    GetProduct_ByName,
    RemoveProduct,
    UpdateProduct
}
