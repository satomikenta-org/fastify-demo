import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  HookHandlerDoneFunction,
} from "fastify";

export function setOnRequestHook(server: FastifyInstance) {
  server.addHook(
    "onRequest",
    (
      request: FastifyRequest,
      _: FastifyReply,
      done: HookHandlerDoneFunction
    ) => {
      request.log.info(
        {
          url: request.raw.url,
          method: request.method,
          ip: request.ip,
        },
        "request"
      );
      done();
    }
  );
}
