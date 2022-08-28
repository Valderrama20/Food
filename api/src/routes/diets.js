const { Router } = require("express")
const apiCompleta = require("../Api_food/variablesApi")
const {Dieta} = require("../db.js")

const diets = Router()

diets.get("", async (req, res) => {
    const dietasBd = await Dieta.findAll()
    if(dietasBd.length) return res.send(dietasBd)
    else{
    const dietas = [ "gluten free",
         "dairy free"
    ,"lacto ovo vegetarian"
    ,"vegan"
    ,"paleolithic"
    ,"primal"
    ,"whole"
    ,"pescatarian"
     ,"ketogenic"
     ,"fodmap friendly"
    ]

  try {
    for (const d of dietas) {
        await Dieta.create({name: d})
    }
  } catch (e) {
    console.log(e)
  }
  const bd = await Dieta.findAll()
    res.send(bd)}
})
//GET /diets:
//Obtener todos los tipos de dieta posibles
//En una primera instancia, cuando no exista ninguno, deberán precargar 
//la base de datos con los tipos de datos indicados por spoonacular acá



module.exports = diets