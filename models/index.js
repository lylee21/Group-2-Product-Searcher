const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("products_db", "postgres", "sdi121", {
    host: "localhost",
    dialect: "postgres",
});

//test connection
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");;
        return true;
    } catch (error) {
        console.error("Unable to connect to the database:", error);
        return false;
    }
}


//import model
const Product = require("./product.model")(sequelize);

async function addDataToDB(){
    try{
        await sequelize.sync({force:true});
        await Product.create({

        });
    } catch(error){
        console.log(error);
    }
};

testConnection();

module.exports = {
    sequelize,
    testConnection,
    Product
}

// const userInput = null; // update

// Product.findAll({
//     where:{
//         name:{
//             [Op.like]: userInput
//         }
//     },
//     order:[["name", "ASC"]]
// })
