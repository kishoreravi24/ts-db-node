import express from 'express';
import routes from './Routes/routes';
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';

const swaggerDoc = YAML.load('./swagger.yaml');

const app = express();
const PORT = 4000;

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Routes setup
app.use('/', routes);

// Cors setup
app.use(cors());

app.listen(PORT, () => {
  console.log('Server started...');
});
