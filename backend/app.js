import express from 'express';
import loginRoute from './routes/login.js';
import logoutRoute from './routes/logout.js';
import uploadRoute from './routes/upload.js';
import downloadRoute from './routes/download.js';
import redmineRoute from './routes/redmine.js';
import paths from './paths.js';
import cors from './middlewares/cors.js';
import expressStatic from './middlewares/express-static.js';
import { cookieSession } from './middlewares/cookie-session.js';
import { passport, setDefaultUser } from './middlewares/passport.js';
import { logFile, logConsole } from './middlewares/morgan.js';
import postgraphile from './middlewares/postgraphile.js';

// App configuration
const app = express();
app.set('x-powered-by', false);

// Middlewares and routes
app.use(cors);
app.use(express.json());
app.use(cookieSession);
app.use(passport.initialize());
app.use(passport.session());
app.use(logConsole);
app.use(logFile);
app.use(setDefaultUser);
app.use(expressStatic);
app.use(paths.login, loginRoute);
app.use(paths.logout, logoutRoute);
app.use(paths.upload, uploadRoute);
app.use(paths.download, downloadRoute);
app.use(paths.redmine, redmineRoute);
app.use(postgraphile);

// 404 Error
app.use((req, res) => res.status(404).send("Página não encontrada\n"));

export default app;
