import Fastify, { FastifyInstance, FastifyRequest } from 'fastify';
import { nanoid } from 'nanoid';
import helmet from 'fastify-helmet';
import cors from 'fastify-cors';
import usersRoutes from './routes/users';
import { setCommonHandlers } from './common/setCommonHandlers';
import { setOnRequestHook } from './common/hooks/onRequest';

const server: FastifyInstance = Fastify({
  logger: true,
  disableRequestLogging: true,
  genReqId: (_: FastifyRequest) => nanoid(), // use x-amzn-trace-id instead
});

setOnRequestHook(server);
setCommonHandlers(server);

server.register(helmet, { contentSecurityPolicy: false });
server.register(cors, { credentials: true });
server.register(usersRoutes, { prefix: 'api/users' });

const start = async () => {
  try {
    await server.listen(3000);
    console.log(server.printRoutes());
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
