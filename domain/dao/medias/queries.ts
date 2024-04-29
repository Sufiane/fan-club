import { dbClient } from '../../index';
import { CreatePayload, Media, UpdatePayload } from './types';

export const mediaSelect = {
    id: true,
    title: true,
    description: true,
    url: true,
}

export const getOne = (mediaId: number): Promise<Media | null> => {
    return dbClient.medias.findUnique({
        select: mediaSelect,
        where: {
            id: mediaId,
        },
    })
}

export const create = async (payload: CreatePayload): Promise<void> => {
    await dbClient.medias.create({
        data: payload,
    })
}

export const update = async (mediaId: number, payload: UpdatePayload): Promise<void> => {
    try {
        await dbClient.medias.update({
            data: payload,
            where: {
                id: mediaId,
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

export const deleteMedia = async (mediaId: number): Promise<void> => {
    try {
        await dbClient.medias.delete({ where: { id: mediaId } })
    } catch (e) {
        // P2025 error code refer to a not found row,
        // meaning we tried to delete a row that do not exist currently in the DB
        // @ts-ignore
        if (e.code !== 'P2025') {
            throw e
        }
    }
}

export const getUserFeed = async (userId: number, follows: number[]): Promise<Media[]> => {
    return dbClient.medias.findMany({
        select: mediaSelect,
        where: {
            userId: {
                in: follows,
            },
            hasBeenViewedBy: {
                none: {
                    id: userId,
                },
            },
        },
    })
}

export const updateMediaViews = async (userId: number, mediaId: number): Promise<void> => {
    await dbClient.medias.update({
        data: {
            hasBeenViewedBy: {
                set: {
                    id: userId,
                },
            },
        },
        where: {
            id: mediaId,
        },
    })
}
