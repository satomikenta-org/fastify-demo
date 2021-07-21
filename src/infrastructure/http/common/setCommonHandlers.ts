import { FastifyError, FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

export function setCommonHandlers(server: FastifyInstance) {
  server.setErrorHandler((error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
    let { statusCode, message } = error;

    if (!statusCode) statusCode = 500;

    if (statusCode < 500) {
      request.log.warn(message);
    } else {
      request.log.error(message);
    }

    reply.status(statusCode).send({
      statusCode: statusCode,
      error: true,
      message,
      requestId: request.id,
    });
  });

  server.setNotFoundHandler((_: FastifyRequest, reply: FastifyReply) => {
    reply.status(404).send('Not Found');
  });
}
