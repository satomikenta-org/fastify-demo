import { FastifyInstance, FastifyReply, FastifyRequest, FastifyServerOptions, RouteShorthandOptions } from 'fastify';

const opts: RouteShorthandOptions = {
  schema: {
    summary: 'users ping エンドポイントです',
    tags: ['users'],
    response: {
      200: {
        type: 'object',
        properties: {
          pong: {
            type: 'string',
          },
        },
      },
    },
  },
};

const opts2: RouteShorthandOptions = {
  schema: {
    summary: 'users pong エンドポイントです',
    tags: ['users'],
    description: 'returns pong !!',
    response: {
      201: {
        description: 'Successful ping response',
        type: 'object',
        properties: {
          ping: {
            description: 'this is ping !!!',
            type: 'string',
          },
        },
      },
    },
  },
  attachValidation: false,
};

export default function usersRoutes(fastify: FastifyInstance, _: FastifyServerOptions, done: any) {
  fastify.get('/ping', opts, async (request: FastifyRequest, reply: FastifyReply) => {
    return reply.send({ pong: 'ping!!' });
  });

  fastify.get('/pong', opts2, async (request: FastifyRequest, reply: FastifyReply) => {
    return reply.send({ ping: 'pong!!' });
  });

  done();
}
