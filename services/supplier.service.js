//Faz toda a lógica de negócio

import supplierRepository from "../repositories/supplier.repository.js";

async function createSupplier(supplier){
    return await supplierRepository.insertSuppliers(supplier);
}

async function getSuppliers(){
    return await supplierRepository.getSuppliers();
}

async function getSupplier(id){
    return await supplierRepository.getSupplier(id);
}

async function deleteSupplier(id){
    await supplierRepository.deleteSuppliers(id);
}

async function updateSupplier(supplier){
    return await supplierRepository.updateSuppliers(supplier);
}

export default {
    createSupplier,
    getSuppliers,
    getSupplier,
    deleteSupplier,
    updateSupplier
}