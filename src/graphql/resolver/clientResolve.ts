import { ClientController } from '../../controllers/client.controller';
import { IClient } from '../../interfaces/IClient';

export const clientResolve = {
    Query: {
        clients: async () => {
          let clients: IClient[] | null = await ClientController.getClients();
          return clients;
        },
        client: async (_: any, args: IClient) => {
          let x: IClient | null = await ClientController.getClient(args.id);
          return x;
        },
    },
    Mutation: {
      addClient: async (_: any, args: IClient) => {
        let x: IClient | null = await ClientController.saveClient(args);
        return x;
      },
      updateClient: async (_: any, args: any) => {
        let x: IClient | null = await ClientController.updateClient(args);
        return x;
      },
      deleteClient: async (_: any, args: any) => {
        let delClient: IClient | null = await ClientController.deleteClient(args.id);
        return delClient;
      }
    }
  }