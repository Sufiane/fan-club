import { type Static } from '@sinclair/typebox'

import {
    createMedia,
    getMedia,
    updateMedia,
} from './schemas'

export type UserParams = Static<typeof getMedia>

export type CreateMediaPayload = Static<typeof createMedia>
export type UpdateMediaPayload = Static<typeof updateMedia>
