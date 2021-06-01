import { postgraphile } from 'postgraphile';
import PgSimplifyInflectorPlugin from "@graphile-contrib/pg-simplify-inflector";
import paths from '../paths.js';
import { pgPool, adminPgPool } from '../db/index.js';

const {
  NODE_ENV,
  POSTGRAPHILE_SCHEMAS,
  POSTGRAPHILE_EXTENDED_ERRORS,
  POSTGRAPHILE_SHOW_ERROR_STACK,
} = process.env;

export default postgraphile(
  pgPool,
  JSON.parse(POSTGRAPHILE_SCHEMAS),
  { 
    // pluginHook,
    // subscriptions: true,
    // simpleSubscriptions: true,
    // websocketMiddlewares: [
    //   cookieSession,
    //   passport.initialize(),
    //   passport.session(),
    // ],
    ownerConnectionString: adminPgPool,
    watchPg: NODE_ENV !== 'production',
    retryOnInitFail: NODE_ENV === 'production',
    enableCors: false,
    graphileBuildOptions: { pgStrictFunctions: true },
    appendPlugins: [PgSimplifyInflectorPlugin],
    graphqlRoute: paths.api,
    graphiql: NODE_ENV !== 'production',
    graphiqlRoute: paths.graphiql,
    ignoreRBAC: true,
    ignoreIndexes: true,
    includeExtensionResources: false,
    enhanceGraphiql: NODE_ENV !== 'production',
    disableDefaultMutations: true,
    disableQueryLog: NODE_ENV === 'production',
    dynamicJson: true,
    allowExplain: NODE_ENV !== 'production',
    showErrorStack: POSTGRAPHILE_SHOW_ERROR_STACK,
    extendedErrors: JSON.parse(POSTGRAPHILE_EXTENDED_ERRORS),
    // exportJsonSchemaPath: NODE_ENV === 'development' ? paths.schemaJson : false,
    // exportGqlSchemaPath: NODE_ENV === 'development' ? paths.schemaGraphQL : false,
    // sortExport: true,
    pgSettings: async req => {
      const { personId, role } = req.user;
      const isTransactionReadOnly = /^query/.test(req?.body?.query);
      return {
        'role': role,
        'transaction_read_only': isTransactionReadOnly,
        'cookie.session.person_id': personId,
      }
    }
  }
);
