//cheerio code goes here
const PORT = 3000;

const fs = require('fs');
const html = fs.readFileSync('./resources/dataset.html', "utf-8");

const cheerio = require('cheerio'); 
const $ = cheerio.load(html)

const productList = []
const priceList = []

$('.Q78Jz',html).each(function(){
    const price = $(this).text();
    
    priceList.push({  
        price
    })
})

$('._8JShU', html).each(function(){
    const productName = $(this).text();

    productList.push({
        productName
    })
})

console.log(productList, priceList);
    

// app.listen(PORT,()=>console.log(`server running on ${PORT}`))