import Fastify from 'fastify'

import { dbClient } from './domain'
import { feedRoutes, mediasRoutes, usersRoutes } from './routes'

const fastify = Fastify({
    logger: true,
})

process.on('uncaughtException', () => {
    void dbClient.$disconnect()
})

const start = async (): Promise<void> => {
    try {
        await fastify.register(usersRoutes, { prefix: '/api/users' })
        await fastify.register(mediasRoutes, { prefix: '/api/medias' })
        await fastify.register(feedRoutes, { prefix: '/api/feed' })

        await fastify.listen({ port: 7777 })
    } catch (err) {
        fastify.log.error(err)

        process.exit(1)
    }
}

void start()
