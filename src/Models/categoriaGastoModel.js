import { DataTypes } from "sequelize";
import sequelize from "../Config/database.js";
import Gasto from "./gastoModel.js";

// Define o modelo CategoriaGasto
const CategoriaGasto = sequelize.define('CategoriaGasto', {
  nomeCategoriaGasto: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'CategoriaGastos',  // Mapeia para a tabela 'CategoriaGastos' no banco
  timestamps: true,     // Adiciona colunas de createdAt e updatedAt
});

CategoriaGasto.hasMany(Gasto,{foreignKey:'categoriaGasto_id'})

export default CategoriaGasto;