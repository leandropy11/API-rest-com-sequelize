import sequelize from 'sequelize';
import db from '../repositories/db.js';
import client from './client.model.js';
import product from './product.model.js';

const sale = db.define('sales', {
    saleId: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    value: {
        type: sequelize.DOUBLE,
        allowNull: false
    },
    date: {
        type: sequelize.DATE,
        allowNull: false
    }
}, {underscored: true});

sale.belongsTo(client, {foreignKey: 'clientId'});
sale.belongsTo(product, {foreignKey: 'productId'});

export default sale;