import Sequelize from 'sequelize';
import db from '../repositories/db.js';

const Client = db.define('clients', {
    clientId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false, // Se permite nulo ou não
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {underscored: true}); // Faz com que o Sequelize entenda o uso do underline no banco de dados

export default Client;