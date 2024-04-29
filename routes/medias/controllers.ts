import { FastifyRequest } from 'fastify';
import { MediasDao } from '../../domain/dao'
import { CreateMediaPayload, UpdateMediaPayload, UserParams } from './types';
import { Media } from '../../domain/dao/medias/types';

export const deleteMedia = async ({
                                      params: { id },
                                  }: FastifyRequest<{ Params: UserParams }>): Promise<void> => {
    try {
        await MediasDao.deleteMedia(id)
    } catch (e) {
        throw new Error('Could not delete media.')
    }
}

export const getOne = async ({
                                 params: { id },
                             }: FastifyRequest<{ Params: UserParams }>): Promise<Media | null> => {
    try {
        return await MediasDao.getOne(id)
    } catch (e) {
        throw new Error('Could not retrieve media.')
    }
}

export const create = async ({
                                 body,
                             }: FastifyRequest<{
    Body: CreateMediaPayload
}>): Promise<void> => {
    try {
        await MediasDao.create(body)
    } catch (e) {
        throw new Error('Could not create media.')
    }
}

export const update = async ({
                                 params: { id },
                                 body,
                             }: FastifyRequest<{
    Params: UserParams;
    Body: UpdateMediaPayload
}>): Promise<void> => {
    try {
        await MediasDao.update(id, body)
    } catch (e) {
        throw new Error('Could not update media.')
    }
}
