
const router = require('express').Router()
const stock = require('../../controllers/StockController')


router.post('/stock/GetAllstock',stock.GetAllStocks)


module.exports= router
