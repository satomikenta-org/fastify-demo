import { FastifyInstance, FastifyReply, FastifyRequest, FastifyServerOptions } from 'fastify';
import { opts, opts2, opts3 } from './schemas';

export default function usersRoutes(fastify: FastifyInstance, _: FastifyServerOptions, done: any) {
  fastify.get('/ping', opts, async (_: FastifyRequest, reply: FastifyReply) => {
    return reply.send({ pong: 'ping!!' });
  });

  fastify.get('/pong', opts2, async (_: FastifyRequest, reply: FastifyReply) => {
    return reply.send({ ping: 'pong!!' });
  });

  fastify.post('/movie', opts3, async (_: FastifyRequest, reply: FastifyReply) => {
    return reply.send({ message: 'success' });
  });

  done();
}
