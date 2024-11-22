import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
// postgres: nome do banco de dados
// postgres: nome do usuário root
// 1234: senha do banco de dados
  host: 'localhost',
  dialect: 'postgres', //nome do banco de dados usado
  port: 5432 //porta que foi colocada quando criaram o banco de dados
});

try {
    await sequelize.authenticate(); //verifica a conexão com o banco de dados
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
    await sequelize.sync(); // Sincroniza os modelos com o banco de dados
    console.log("Modelos sincronizados com sucesso!");
} catch (error) {
    console.error("Falha ao conectar com o banco de dados:", error);
}

export default sequelize;