const fs = require("fs");
const html = fs.readFileSync("./resources/dataset.html", "utf-8");

module.exports.init = function (Product) {
  const cheerio = require("cheerio");
  const $ = cheerio.load(html);

  const priceDoms = $(".LY2Vk", html);
  const nameDoms = $("._8JShU", html);

  for (let i = 0; i < nameDoms.length; i++) {
    //const product = {name: $(nameDoms[i]).find('a').attr('title'), price: $(priceDoms[i]).text()};
    const product = new Product();
    product.name = $(nameDoms[i]).find("a").attr("title");
    product.price = $(priceDoms[i]).text();
    product.save();
  }
};