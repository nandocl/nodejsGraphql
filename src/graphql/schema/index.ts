import { mergeTypeDefs } from 'graphql-tools';
import { clientsSchema } from './clientsSchema';
import { productsShema } from './productsShema';

const types = [
    clientsSchema,
    productsShema,
];

// export default typeDefs;

const typesMerge = mergeTypeDefs(types);

export default typesMerge;