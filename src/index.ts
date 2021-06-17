import { app } from './app';
import * as http from 'http';

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
