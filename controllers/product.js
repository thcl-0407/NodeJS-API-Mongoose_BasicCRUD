const services = require('../services/product.js')

const GetHomePage = (req, res)=>{
    res.render('home')
}

const GetAddPage = (req, res)=>{
    res.render('add')
}

//**************************************************************** */
//API
//**************************************************************** */

const AddProduct_API = (req, res)=>{
    let product = req.body

    console.log(new Date(Date.now()).toJSON() + ': Add new product')
    console.log(product)

    services.AddProduct(product, (code, status, msg)=>{
        res.status(code).json({
            code: code,
            status: status,
            msg: msg
        })
    })
} 

const GetProducts_API = (req, res)=>{
    services.GetProducts((code, status, arr)=>{
        res.status(code).json({
            code: code,
            status: status,
            products: arr
        })
    })
} 

const GetProductByName_API = (req, res)=>{
    services.GetProduct_ByName(req.params.name, (code, status, arr)=>{
        res.status(code).json({
            code: code,
            status: status,
            products: arr
        })
    })
} 

const RemoveProduct_API = (req, res)=>{
    services.RemoveProduct(req.params.id, (code, status, msg)=>{
        res.status(code).json({
            code: code,
            status: status,
            msg: msg
        })
    })
}

const UpdateProduct_API = (req, res)=>{
    let params = {
        id: req.params.id,
        tenSanPham: req.body.tenSanPham,
        loaiSanPham: req.body.loaiSanPham,
        giaSanPham: req.body.giaSanPham
    }

    services.UpdateProduct(params, (code, status, msg)=>{
        res.status(code).json({
            code: code,
            status: status,
            msg: msg
        })
    })
} 

module.exports = {
    GetHomePage,
    GetAddPage,
    AddProduct_API,
    GetProducts_API,
    GetProductByName_API,
    RemoveProduct_API,
    UpdateProduct_API
}