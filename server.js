require("./configs/database.config")

const Cat = require("./models/Cat.model")

// Cat.findOneAndUpdate() IS DANGEROUS BECAUSE IT WILL UPDATE IF THE WRONG OBJECTS IF THE FILTER IS "WRONG"

Cat.findByIdAndUpdate("6205001a2f711dcdb9e31d82",   {$set: {name: "Sandra"}},
{new: true})
.then(cat=>console.log(cat))