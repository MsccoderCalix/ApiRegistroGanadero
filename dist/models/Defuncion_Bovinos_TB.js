"use strict";

module.exports = function (sequelize, DataType) {
  /**
   * CREATE TABLE "Defuncion_Bovinos_TB" ( `ID` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `Codigo_Anual` TEXT, `Codigo_Ipsa` TEXT, `Fecha_Defuncion` TEXT NOT NULL, `Observaciones` TEXT NOT NULL )
   */
  var Defuncion_Bovinos_TB = sequelize.define('Defuncion_Bovinos_TB', {
    ID: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    Codigo_Anual: {
      type: DataType.STRING,
      allowNull: false
    },
    Codigo_Ipsa: {
      type: DataType.STRING
    },
    Fecha_Defuncion: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    Descripcion: {
      type: DataType.STRING,
      validate: {
        notEmpty: true
      }
    }
  });

  Defuncion_Bovinos_TB.associate = function (models) {
    Defuncion_Bovinos_TB.belongsTo(models.Bovinos_TB);
  };

  return Defuncion_Bovinos_TB;
};