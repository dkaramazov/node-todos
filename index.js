import { config } from 'dotenv';
import app from './src/app.js';

config();

const port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('app running on port', port);
});