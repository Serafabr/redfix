import express from 'express';
import loginRoute from './routes/login.js';
import logoutRoute from './routes/logout.js';
import uploadRoute from './routes/upload.js';
import downloadRoute from './routes/download.js';
import redmineRoute from './routes/redmine.js';
import paths from './paths.js';
import cors from './middlewares/cors.js';
import cookieSession from './middlewares/cookie-session.js';
import passport, { setDefaultUser } from './middlewares/passport.js';
import morgan from './middlewares/morgan.js';
import postgraphile from './middlewares/postgraphile.js';
import error404 from './middlewares/error404.js'

const app = express();
app.set('x-powered-by', false);

app.use(cors);
app.use(express.json());
app.use(cookieSession);
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan.console);
app.use(morgan.file);
app.use(setDefaultUser);
app.use(express.static(paths.public));
app.use(paths.login, loginRoute);
app.use(paths.logout, logoutRoute);
app.use(paths.api, uploadRoute);
app.use(paths.download, downloadRoute);
app.use(paths.redmine, redmineRoute);
app.use(postgraphile);
app.use(error404);

export default app;
