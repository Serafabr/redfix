const { postgraphile, makePluginHook } = require('postgraphile');
const { default: PgPubsub } = require("@graphile/pg-pubsub");
const paths = require('../paths');
const { pgPool } = require('../db');
const cookieSession = require('./cookie-session');
const passport = require('./passport');

const pluginHook = makePluginHook([PgPubsub]);

module.exports = postgraphile(
  pgPool,
  ['api'],
  { 
    // pluginHook,
    // subscriptions: true,
    // simpleSubscriptions: true,
    // websocketMiddlewares: [
    //   cookieSession,
    //   passport.initialize(),
    //   passport.session(),
    // ],
    watchPg: process.env.NODE_ENV !== 'production',
    retryOnInitFail: process.env.NODE_ENV === 'production',
    enableCors: false,
    graphqlRoute: paths.api,
    graphiql: process.env.NODE_ENV !== 'production',
    graphiqlRoute: paths.graphiql,
    // ignoreRBAC: false,
    // ignoreIndexes: false,
    includeExtensionResources: false,
    enhanceGraphiql: process.env.NODE_ENV !== 'production',
    disableDefaultMutations: true,
    disableQueryLog: process.env.NODE_ENV === 'production',
    dynamicJson: true,
    allowExplain: process.env.NODE_ENV !== 'production',
    showErrorStack: 'json',
    extendedErrors: ['hint', 'detail', 'errcode'],
    // exportJsonSchemaPath: process.env.NODE_ENV === 'development' ? '../frontend/src/schema.json' : false,
    // exportGqlSchemaPath: process.env.NODE_ENV === 'development' ? '../frontend/src/schema.graphql' : false,
    // sortExport: true,
    pgSettings: async req => {
      const [person_id, role] = req.session.populated ? req.session.passport.user.split('-') : ['0', 'visitor'];
      const readOnly = (req.method === 'POST' && /query/i.test(req.body.query)) ? 'on' : 'off';
      return {
        // 'transaction_read_only': readOnly,
        'role': role,
        // 'statement_timeout': 5000,
        'cookie.session.person_id': person_id,
      }
    }
  }
);
