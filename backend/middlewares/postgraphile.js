const { postgraphile, makePluginHook } = require('postgraphile');
const PgSimplifyInflectorPlugin = require("@graphile-contrib/pg-simplify-inflector");
const { default: PgPubsub } = require("@graphile/pg-pubsub");
const paths = require('../paths');
const { pgPool, adminPgPool } = require('../db');
const cookieSession = require('./cookie-session');
const passport = require('./passport');

const pluginHook = makePluginHook([PgPubsub]);

const { NODE_ENV, PGSETTINGS_STATEMENT_TIMEOUT, POSTGRAPHILE_SCHEMAS } = process.env;

module.exports = postgraphile(
  NODE_ENV !== 'production' ? adminPgPool : pgPool,
  POSTGRAPHILE_SCHEMAS.split(','),
  { 
    // pluginHook,
    // subscriptions: true,
    // simpleSubscriptions: true,
    // websocketMiddlewares: [
    //   cookieSession,
    //   passport.initialize(),
    //   passport.session(),
    // ],
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
    showErrorStack: 'json',
    extendedErrors: ['hint', 'detail', 'errcode'],
    // exportJsonSchemaPath: process.env.NODE_ENV === 'development' ? paths.schemaJson : false,
    // exportGqlSchemaPath: process.env.NODE_ENV === 'development' ? paths.schemaGraphQL : false,
    // sortExport: true,
    pgSettings: async req => {
      const { personId, role } = req.cmmsSession;
      const isTransactionReadOnly = req.body && /^query/.test(req.body.query);
      return {
        'role': role,
        'statement_timeout': PGSETTINGS_STATEMENT_TIMEOUT,
        'transaction_read_only': isTransactionReadOnly ? 'on' : 'off',
        'cookie.session.person_id': personId,
      }
    }
  }
);
