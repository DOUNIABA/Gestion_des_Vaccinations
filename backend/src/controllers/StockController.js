const Stock= require('../models/StockVaccin')


const GetAllStocks= async(req,res)=>{
    const Stocks= await Stock.find()
     res.json(Stocks)
}



module.exports= {GetAllStocks}