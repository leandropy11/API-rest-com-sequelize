//Faz toda a lógica de negócio

import productRepository from "../repositories/product.repository.js";
import supplierRepository from "../repositories/supplier.repository.js";
import SaleRepository from '../repositories/sale.repository.js';

async function createProduct(product){
    if(await supplierRepository.getSupplier(product.suppliersId)){
        return await productRepository.insertProduct(product);
    }
    throw new Error('O suppliers ID informado não existe.');
    
}

async function getProducts(){
    return await productRepository.getProducts();
}

async function getProduct(id){
    return await productRepository.getProduct(id);
}

async function deleteProduct(id){
    const sales = await SaleRepository.getSalesByProductId(id);
    if(sales.length > 0){
        throw new Error('Não é possível excluir o produto, pois ele já tem vendas'); 
    }
    await productRepository.deleteProduct(id);
}

async function updateProduct(product){
    if(await supplierRepository.getSupplier(product.suppliersId)){
        return await productRepository.updateProduct(product);
    }
    throw new Error('O suppliers ID informado não existe.');
    
}


export default {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct
}