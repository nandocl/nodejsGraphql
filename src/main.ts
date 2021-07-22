import express from 'express';
import { graphqlHTTP } from 'express-graphql';

import { executableSchema } from './graphql';

// Start mongoose
import { Database } from './database/connection';
Database.runDatabase();

let port = process.env.PORT || 3000;

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: executableSchema,
    graphiql: true
}));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});