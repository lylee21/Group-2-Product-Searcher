//request related

const userInput = null; // update

Product.findAll({
    where:{
        name:{
            [Op.like]: userInput
        }
    },
    order:[["name", "ASC"]]
})