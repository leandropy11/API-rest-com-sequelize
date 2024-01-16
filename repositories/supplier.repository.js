//Faz a conexão com o banco de dados

import Supplier from '../models/supplier.model.js';

async function insertSuppliers(supplier){
    try {
        return await Supplier.create(supplier);
    } catch(err){
        throw err;
    }  
}

async function getSuppliers(){ // Retorna todos os supplierses do banco

    try {
        return await Supplier.findAll();
    } catch(err){
        throw err;
    }
}

async function getSupplier(id){ // Retorna o supplierse pelo id

    try {
        return await Supplier.findByPk(id); // findByPk procura pela primary Key da tabel
    } catch(err){
        throw err;
    }
}

async function updateSuppliers(supplier){

    try {
        await Supplier.update(supplier, {
            where: {
                suppliersId: supplier.suppliersId
            }
        });
        return await getSuppliers(supplier.suppliersId);
    } catch(err){
        throw err;
    }
}

async function deleteSuppliers(id){

    try {
        await Supplier.destroy({
            where: {
                suppliersId: id
            }
        });
    } catch(err){
        throw err;
    }
}

export default {
    insertSuppliers,
    getSupplier,
    getSuppliers,
    updateSuppliers,
    deleteSuppliers
}