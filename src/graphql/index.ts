import { makeExecutableSchema } from '@graphql-tools/schema';

import typesMerge from './schema';
import resolveMerge from './resolver';

export const executableSchema = makeExecutableSchema({
    typeDefs: [typesMerge],
    resolvers: [resolveMerge],
});