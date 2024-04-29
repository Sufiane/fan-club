import type { FastifyInstance } from 'fastify'
import {
    addFollow,
    createUser, deleteFollow,
    deleteUser,
    getOneUser,
    updateUser,
} from './controllers'
import {
    addFollow as addFollowSchema,
    createUser as createUserSchema,
    deleteUser as deleteUserSchema,
    getUser as getUserSchema,
    updateUser as updateUserSchema,
} from './schemas'

export async function usersRoutes(fastify: FastifyInstance): Promise<void> {
    fastify.route({
        method: 'POST',
        url: '/create',
        schema: {
            body: createUserSchema,
        },
        handler: createUser,
    })

    fastify.route({
        method: 'GET',
        url: '/:id',
        schema: {
            params: getUserSchema,
        },
        handler: getOneUser,
    })

    fastify.route({
        method: 'POST',
        url: '/update/:id',
        schema: {
            params: getUserSchema,
            body: updateUserSchema,
        },
        handler: updateUser,
    })

    fastify.route({
        method: 'DELETE',
        url: '/delete/:id',
        schema: {
            params: deleteUserSchema,
        },
        handler: deleteUser,
    })

    fastify.route({
        method: 'POST',
        url: '/:id/follow/create',
        schema: {
            params: getUserSchema,
            body: addFollowSchema,
        },
        handler: addFollow,
    })

    fastify.route({
        method: 'POST',
        url: '/:id/follow/delete',
        schema: {
            params: getUserSchema,
            body: addFollowSchema,
        },
        handler: deleteFollow,
    })
}
