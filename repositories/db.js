//Função para conexão com o banco de dados
import Sequelize from 'sequelize';

const sequelize = new Sequelize( //sequelize já se responsabiliza por lidar com o pool de conexões
    "postgres://rdslqdag:BpjnKpGFbyY16l3GeFqSjM-GdOd7FR7B@drona.db.elephantsql.com/rdslqdag",
    {
        dialect: 'postgres',
        define: {
            timestamps: false
        }
    }
)

export default sequelize;