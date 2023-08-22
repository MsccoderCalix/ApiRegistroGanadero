module.exports = (sequelize, DataType) => {
/**
 * CREATE TABLE "Bovinos_TB" ( `ID` INTEGER NOT NULL, `Codigo_Anual` TEXT NOT NULL, `Codigo_Ipsa` TEXT, `Fecha_Nacimiento` TEXT NOT NULL, `Sexo` TEXT NOT NULL, `Nombre_Apodo` TEXT, `Peso_Kg` INTEGER, `Raza` TEXT, `Cod_Padre` TEXT, `Cod_Madre` TEXT, `Color` TEXT, `Activo` INTEGER NOT NULL, `Grupo` TEXT, `Descripcion` TEXT, PRIMARY KEY(`ID`) )
 */
    const Bovinos_TB = sequelize.define('Bovinos_TB', {      
        ID: {
          type: DataType.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,     
        },
        Codigo_Anual: {
          type: DataType.STRING,   
        },
      Codigo_Ipsa: {
        type: DataType.STRING
      },
      Fecha_Nacimiento: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
          }
      },
      Sexo:{
        type: DataType.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
          }
    },
    Nombre_Apodo:{
      type: DataType.STRING
  },
  Peso_Kg:{
    type: DataType.INTEGER
},
Raza:{
  type: DataType.STRING
},
Cod_Padre:{
  type: DataType.STRING
},
Cod_Madre:{
  type: DataType.STRING
},
Color:{
  type: DataType.STRING
},
Activo:{
  type: DataType.INTEGER,
  allowNull: false,
  defaultValue: 1,
  validate: {
      notEmpty: true
    }
},
Grupo:{
  type: DataType.STRING
},
Descripcion:{
  type: DataType.STRING
}

    });
  
    Bovinos_TB.associate = (models) => {
      Bovinos_TB.hasOne(models.Defuncion_Bovinos_TB);
      Bovinos_TB.hasMany(models.Muestras_DLeche_TB);
      Bovinos_TB.hasOne(models.Ventas_Bovino_TB);
    };
  
    return Bovinos_TB;
  };