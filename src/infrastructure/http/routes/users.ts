import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  FastifyServerOptions,
  RouteShorthandOptions,
} from "fastify";

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          pong: {
            type: "string",
          },
          ping: {
            type: "string",
          },
        },
      },
    },
  },
};

export default function usersRoutes(
  fastify: FastifyInstance,
  _: FastifyServerOptions,
  done: any
) {
  fastify.get(
    "/ping",
    opts,
    async (request: FastifyRequest, reply: FastifyReply) => {
      return { pong: "it worked!", ping: "success" };
    }
  );
  done();
}
