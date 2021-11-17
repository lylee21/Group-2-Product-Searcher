const {DataTypes, Model} = require("sequelize")

module.exports = function (sequelize) {
    class Product extends Model {}
    
    Product.init(
        {
            id:{
                type:DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement:true
            },
            userInput:{
                type: DataTypes.STRING,
                allowNull: false
            },
            productName:{
                type: DataTypes.STRING,
                allowNull: false
            },
            productPrice:{
                type: DataTypes.STRING,
                allowNull: false
            },
        },
        {
            sequelize,
            modelName: "Product",
            tableName: "products"
        }
    );
    return Product;
};