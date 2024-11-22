import { DataTypes } from "sequelize";
import sequelize from "../Config/database.js";
import CategoriaGasto from "./categoriaGastoModel.js";

// Define o modelo Gasto
const Gasto = sequelize.define('Gasto', {
  nomeGasto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricaoGasto: {
    type: DataTypes.STRING,
    allowNull: true
  },
  categoriaGasto_id:{
    type: DataTypes.INTEGER,
    references:{
        model: CategoriaGasto,
        key:'id'
    },
    allowNull: false
  }
}, {
  tableName: 'gastos',  // Mapeia para a tabela 'gastos' no banco
  timestamps: true,     // Adiciona colunas de createdAt e updatedAt
});

Gasto.belongsTo(CategoriaGasto, {foreignKey:'categoriaGasto_id'})

export default Gasto;