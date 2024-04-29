import { FastifyInstance } from 'fastify';

import { getFeed, updateMediaViews } from './controllers';
import {
    getFeed as getFeedSchema,
    updateFeedView as updateFeedViewSchema,
} from './schemas'

export async function feedRoutes(fastify: FastifyInstance) {
    fastify.route({
        method: 'GET',
        url: '/:id',
        schema: {
            params: getFeedSchema,
        },
        handler: getFeed,
    })

    fastify.route({
        method: 'POST',
        url: '/:id',
        schema: {
            params: getFeedSchema,
            body: updateFeedViewSchema,
        },
        handler: updateMediaViews
    })
}
