const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");
const userInput = null; // update
const request = require("request");

// Product.findAll({
//     where: {
//         name: {
//             [Op.like]: userInput,
//         },
//     },
//     order: [["name", "ASC"]],
// });

request("https://shopee.sg/", (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        $("._1syN0y").each((i, el) => {
            const title = $(el).find("._1YAByT").text();

            // Write Row To CSV
            writeStream.write(`${title} \n`);
        });

        console.log("Scraping Done...");
    }
});
