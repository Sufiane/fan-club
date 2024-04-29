import { type FastifyRequest } from 'fastify'

import { UsersDao, type UsersTypes } from '../../domain'
import {
    type UserParams,
    type CreateUserPayload, UpdateUserPayload,
} from './types'
import { hashPassword } from '../../auth'

export const createUser = async ({
                                     body: {
                                         password,
                                         ...body
                                     },
                                 }: FastifyRequest<{
    Body: CreateUserPayload
}>): Promise<void> => {
    try {
        const hashedPassword = await hashPassword(password)

        await UsersDao.create({ ...body, password: hashedPassword })
    } catch (e) {
        throw new Error('Could not create new User.')
    }
}

export const getOneUser = ({
                               params: { id },
                           }: FastifyRequest<{
    Params: UserParams
}>): Promise<UsersTypes.BasicUser | null> => {
    return UsersDao.getOne(id)
}

export const deleteUser = async ({
                                     params: { id: idToDelete },
                                 }: FastifyRequest<{ Params: UserParams }>): Promise<void> => {
    try {
        await UsersDao.deleteUser(idToDelete)
    } catch {
        throw new Error('Error while deleting User account.')
    }
}

export const updateUser = async ({
                                     params: { id },
                                     body: {
                                         password,
                                         ...body
                                     },
                                 }: FastifyRequest<{
    Body: UpdateUserPayload
    Params: UserParams,
}>): Promise<void> => {
    try {
        const hashedPassword = password ? await hashPassword(password) : undefined

        await UsersDao.update(id, { ...body, password: hashedPassword })
    } catch (e) {
        console.log('e', e)

        throw new Error('Could not update User.')
    }
}
