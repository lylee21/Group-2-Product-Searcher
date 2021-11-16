const fs = require('fs');
const html = fs.readFileSync('./resources/dataset.html', "utf-8");

const cheerio = require('cheerio'); 
const $ = cheerio.load(html)

const productList = []
const priceDoms = $('.LY2Vk', html);
const nameDoms = $('._8JShU', html);

for (let i = 0 ; i < nameDoms.length ; i++){
    const product = {name: $(nameDoms[i]).find('a').attr('title'), price: $(priceDoms[i]).text()};
    productList.push(product);
}

console.log(productList);