import { FastifyRequest } from 'fastify';

import { MediasDao } from '../../domain'
import { UpdateFeedViewPayload, UserIdParams } from './types';
import { Media } from '../../domain/dao/medias/types';
import { getUserFollows } from '../../domain/dao/users/queries';

export const getFeed = async ({ params: { id } }: FastifyRequest<{
    Params: UserIdParams
}>): Promise<Media[]> => {
    try {
        const userFollows = (await getUserFollows(id)).map(data => data.id)

        return await MediasDao.getUserFeed(id, userFollows)
    } catch (e) {
        throw new Error('Could not retrieve feed.')
    }
}

export const updateMediaViews = async ({ params: { id }, body }: FastifyRequest<{
    Params: UserIdParams
    Body: UpdateFeedViewPayload,
}>): Promise<void> => {
    try {
        await MediasDao.updateMediaViews(id, body.mediaId)
    } catch (e) {
        throw new Error('Could not update media views.')
    }
}
