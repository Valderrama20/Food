const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id:{
     type: DataTypes.INTEGER,
     autoIncrement: true,
     allowNull: false,
     primaryKey: true,
    
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary:{
      type: DataTypes.TEXT,
      allowNull:false
    },
    healthScore:{
       type: DataTypes.FLOAT
    },
    steps:{
      type: DataTypes.TEXT
    },
    ocultar:{
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }

  },{timestamps: false});
};

//ID: *
//Nombre *
//Resumen del plato *
//Nivel de "comida saludable" (health score)
//Paso a paso
