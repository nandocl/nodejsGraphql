import clientModel from '../database/models/client.model';
import { IClient } from '../interfaces/IClient';

export class ClientController{
    static async getClients(){
        try{
            let clients: IClient[]|null = await clientModel.find();
            return clients;
        }catch(err){
            return null;
        }
    }

    static async getClient(id: Number){
        try{
            let client: IClient|null = await clientModel.findOne({id: id});
            return client;
        }catch(err){
            return null;
        }
    }

    static async saveClient(newClient: IClient): Promise<IClient|null>{
        try{
            let saveNewClient = new clientModel(newClient);
            let cl = await saveNewClient.save();
            return cl;
        }catch(err){
            return null;
        }
    }

    static async updateClient(updateClient: IClient): Promise<IClient|null> {
        try{
            let newClk = await clientModel.findOneAndUpdate({id: updateClient.id}, updateClient, {new: true});
            return newClk;
        }catch(err){
            return null;
        }
    }

    static async deleteClient(id: number): Promise<IClient|null> {
        try{
            let delClient = await clientModel.findOneAndDelete({id: id});
            return delClient;
        }catch(err){
            return null;
        }
    }
}