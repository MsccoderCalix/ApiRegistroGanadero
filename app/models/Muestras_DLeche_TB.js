module.exports = (sequelize, DataType) => {
/**
 * CREATE TABLE "Muestras_DLeche_TB" ( `ID` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `Codigo_Anual` TEXT, `Codigo_Ipsa` TEXT, `Fecha_Muestra` TEXT NOT NULL, `Litros` INTEGER NOT NULL, `Precio_Leche` INTEGER NOT NULL, `Observaciones` TEXT )
 */
    const Muestras_DLeche_TB = sequelize.define('Muestras_DLeche_TB', {      
        ID: {
          type: DataType.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,     
        },
        Codigo_Anual: {
          type: DataType.STRING,
          allowNull: false,     
        },
      Codigo_Ipsa: {
        type: DataType.STRING
      },
      Fecha_Muestra: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
          }
      },
      Litros: {
        type: DataType.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
          }
      },
      Precio_Leche: {
        type: DataType.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
          }
      },
    Descripcion:{
      type: DataType.STRING
}

    });
  
    Muestras_DLeche_TB.associate = (models) => {
      Muestras_DLeche_TB.belongsTo(models.Bovinos_TB);
    };
  
    return Muestras_DLeche_TB;
  };