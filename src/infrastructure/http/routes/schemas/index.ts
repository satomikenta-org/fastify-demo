import { RouteShorthandOptions } from 'fastify';

export const opts: RouteShorthandOptions = {
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

export const opts2: RouteShorthandOptions = {
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

const PostMovieBody = {
  type: 'object',
  properties: {
    title: { type: 'string' },
    releaseYear: { type: 'integer', minimum: 1878 },
  },
  required: ['title', 'releaseYear'],
};

export const opts3: RouteShorthandOptions = {
  schema: {
    tags: ['users'],
    body: PostMovieBody,
    response: {
      201: {
        description: 'Successful post movie response',
        type: 'object',
        properties: {
          message: {
            description: 'create movie successfully',
            type: 'string',
          },
        },
      },
    },
  },
};
