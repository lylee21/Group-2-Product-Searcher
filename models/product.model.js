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
            name:{
                type: DataTypes.STRING,
                allowNull: false
            },
            price:{

                type: DataTypes.STRING,
                allowNull: false
            },
            createdAt:{
                type:DataTypes.DATE,
                allowNull:false
            },
            updatedAt:{
                type:DataTypes.DATE,
                allowNull:false
            }
        },
        {
            sequelize
        }
    );
    return Product;
};