//Faz a conexão com o banco de dados

import Client from '../models/client.model.js';

async function insertClient(client){
    try {
        return await Client.create(client);
    } catch(err){
        throw err;
    }  
}

async function getClients(){ // Retorna todos os clientes do banco

    try {
        return await Client.findAll();
    } catch(err){
        throw err;
    }
}

async function getClient(id){ // Retorna o cliente pelo id

    try {
        return await Client.findByPk(id); // findByPk procura pela primary Key da tabel
    } catch(err){
        throw err;
    }
}

async function updateClient(client){

    try {
        await Client.update(client, {
            where: {
                clientId: client.clientId
            }
        });
        return await getClient(client.clientId);
    } catch(err){
        throw err;
    }
}

async function deleteClient(id){

    try {
        await Client.destroy({
            where: {
                clientId: id
            }
        });
    } catch(err){
        throw err;
    }
}

export default {
    insertClient,
    getClients,
    getClient,
    updateClient,
    deleteClient
}