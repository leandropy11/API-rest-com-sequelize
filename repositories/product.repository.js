//Faz a conexão com o banco de dados

import Product from '../models/product.model.js';

async function insertProduct(product){
    try {
        return await Product.create(product);
    } catch(err){
        throw err;
    }  
}

async function getProducts(){ // Retorna todos os productses do banco

    try {
        return await Product.findAll();
    } catch(err){
        throw err;
    }
}

async function getProduct(id){ // Retorna o productse pelo id

    try {
        return await Product.findByPk(id); // findByPk procura pela primary Key da tabel
    } catch(err){
        throw err;
    }
}

async function updateProduct(product){

    try {
        await Product.update(product, {
            where: {
                productsId: product.productsId
            }
        });
        return await getProducts(product.productsId);
    } catch(err){
        throw err;
    }
}

async function deleteProduct(id){

    try {
        await Product.destroy({
            where: {
                productId: id
            }
        });
    } catch(err){
        throw err;
    }
}

export default {
    insertProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct
}