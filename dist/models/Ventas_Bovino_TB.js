"use strict";

module.exports = function (sequelize, DataType) {
  /**
   CREATE TABLE "Ventas_Bovino_TB" ( `ID` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `Codigo_Anual` TEXT, `Codigo_Ipsa` TEXT, `Fecha_Venta` TEXT NOT NULL, `Peso_Kg` INTEGER, `Precio_Venta` INTEGER NOT NULL, `Observaciones` TEXT )
   */
  var Ventas_Bovino_TB = sequelize.define('Ventas_Bovino_TB', {
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
    Fecha_Venta: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    Peso_Kg: {
      type: DataType.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    Precio_Venta: {
      type: DataType.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    Descripcion: {
      type: DataType.STRING
    }
  });

  Ventas_Bovino_TB.associate = function (models) {
    Ventas_Bovino_TB.belongsTo(models.Bovinos_TB);
  };

  return Ventas_Bovino_TB;
};