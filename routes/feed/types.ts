import { type Static } from '@sinclair/typebox'
import { getUser } from '../users/schemas';
import { updateFeedView } from './schemas';

export type UserIdParams = Static<typeof getUser>
export type UpdateFeedViewPayload = Static<typeof updateFeedView>
