const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize('sqlite::memory:') 

//import model
const Product = require("./product.model")(sequelize);

//test connection
(async function() {
    try {
        await sequelize.authenticate();
        await sequelize.sync({force:true});
        console.log("Connection has been established successfully.");;
        return true;
    } catch (error) {
        console.error("Unable to connect to the database:", error);
        return false;
    }
})();

module.exports = {
    Product
}