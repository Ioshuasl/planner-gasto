import { DataTypes } from "sequelize";
import sequelize from "../Config/database.js";

// Define o modelo Orcamento
const Orcamento = sequelize.define('Orcamento', {
  tituloOrcamento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valorMetaOrcamento: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  valorAtualOrcamento: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue:0.00
  }
}, {
  tableName: 'Orcamentos',  // Mapeia para a tabela 'Orcamentos' no banco
  timestamps: true,     // Adiciona colunas de createdAt e updatedAt
});

export default Orcamento;