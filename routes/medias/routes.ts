import type { FastifyInstance } from 'fastify';
import {
    createMedia as createMediaSchema,
    deleteMedia as deleteMediaSchema,
    getMedia as getMediaSchema,
    updateMedia as updateMediaSchema,
} from './schemas';
import { create, deleteMedia, getOne, update } from './controllers';

export async function mediasRoutes(fastify: FastifyInstance): Promise<void> {
    fastify.route({
        method: 'GET',
        url: '/:id',
        schema: {
            params: getMediaSchema,
        },
        handler: getOne,
    })

    fastify.route({
        method: 'POST',
        url: '/create',
        schema: {
            body: createMediaSchema,
        },
        handler: create,
    })

    fastify.route({
        method: 'POST',
        url: '/update/:id',
        schema: {
            params: getMediaSchema,
            body: updateMediaSchema,
        },
        handler: update,
    })

    fastify.route({
        method: 'DELETE',
        url: '/:id',
        schema: {
            params: deleteMediaSchema,
        },
        handler: deleteMedia,
    })
}
