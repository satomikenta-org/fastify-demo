import Fastify, { FastifyInstance, FastifyRequest } from 'fastify';
import { nanoid } from 'nanoid';
import helmet from 'fastify-helmet';
import cors from 'fastify-cors';
import usersRoutes from './routes/users';
import { setCommonHandlers } from './common/setCommonHandlers';
import { setOnRequestHook } from './common/hooks/onRequest';
import sensible from 'fastify-sensible';
import fastifySwagger from 'fastify-swagger';

const server: FastifyInstance = Fastify({
  logger: true,
  disableRequestLogging: true,
  genReqId: (_: FastifyRequest) => nanoid(), // use x-amzn-trace-id instead
});

setOnRequestHook(server);
setCommonHandlers(server);

server.register(fastifySwagger, {
  routePrefix: '/docs',
  swagger: {
    info: {
      title: 'ping/pong API',
      description: 'ping/poing api docs',
      version: '1.0',
    },
    tags: [
      { name: 'users', description: 'usersのAPI' },
      { name: 'auth', description: 'authのAPI' },
    ],
    externalDocs: {
      url: 'https://editor.swagger.io/',
      description: 'Swagger Editor',
    },
  },
  exposeRoute: true,
});
server.register(sensible);
server.register(helmet, { contentSecurityPolicy: false });
server.register(cors, { credentials: true });

server.register(usersRoutes, { prefix: 'api/users' });

const start = async () => {
  try {
    await server.listen(3000, '0.0.0.0'); // '0.0.0.0' is required if you wanna run fastify inside docker.
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
