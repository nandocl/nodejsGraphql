import { mergeResolvers } from 'graphql-tools';

import { clientResolve } from './clientResolve';
import { productResolve } from './productResolve';

const resolvers = [
    clientResolve,
    productResolve
]

const resolveMerge = mergeResolvers(resolvers);

export default resolveMerge;