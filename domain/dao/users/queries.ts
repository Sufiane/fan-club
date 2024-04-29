import { dbClient } from '../../index'
import { type BasicUser, type CreateUserPayload, type UpdateUserPayload } from './types'

export const create = async (payload: CreateUserPayload): Promise<void> => {
    await dbClient.users.create({
        data: payload,
    })
}

export const deleteUser = async (UserId: number): Promise<void> => {
    await dbClient.users.delete({
        where: {
            id: UserId,
        },
    })
}

export const basicSelect = {
    id: true,
    email: true,
    username: true,
    description: true,
    profilePictureUrl: true,
}

export const getOne = (userId: number): Promise<BasicUser | null> => {
    return dbClient.users.findFirst({
        select: basicSelect,
        where: {
            id: userId,
        },
    })
}

export const update = async (userId: number, payload: UpdateUserPayload): Promise<void> => {
    try {
        await dbClient.users.update({
            data: payload,
            where: {
                id: userId,
            },
        })
    } catch (e) {
        // P2025 error code refer to a not found row,
        // meaning we tried to update a row that do not exist currently in the DB
        // @ts-ignore
        if (e.code !== 'P2025') {
            throw e
        }
    }
}