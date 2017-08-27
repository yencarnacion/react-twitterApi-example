const express = require('express');
import routes from './routes';
import { registerRoutes } from './utils/registerRoutes';

const app = express();
const router = express.Router();

registerRoutes(router, routes);

const port = process.env.KLAB_API_PORT | 8081;

app.use('/api', router);
app.listen(port);