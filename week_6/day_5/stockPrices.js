let stocks = [10,3,2,7,1,7,6]

const stockPrices = (arr) => {
    let lowest = arr[0]
    let stockObj = {
        profit: 0
    }

    for(let i = 0; i < arr.length; i++){
        let currentPrice = arr[i]
        if(currentPrice < lowest){
            lowest = currentPrice
        }

        let profit = currentPrice - lowest
        if(profit > stockObj.profit){
            stockObj.profit = profit
            stockObj.buyPrice = lowest
            stockObj.sellPrice = currentPrice
        }
    }

    return stockObj
}

console.log(stockPrices(stocks))