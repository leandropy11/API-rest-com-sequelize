import sequelize from 'sequelize';
import db from '../repositories/db.js';
import supplier from './supplier.model.js';

const product = db.define('products', {
    productId: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    description: {
        type: sequelize.STRING,
        allowNull: false
    },
    value: {
        type: sequelize.DOUBLE,
        allowNull: false
    },
    stock: {
        type: sequelize.INTEGER,
        allowNull: false
    },

}, {underscored: true});

product.belongsTo(supplier, {foreignKey: 'suppliersId'}); // Cria a chave estrangeira

export default product;