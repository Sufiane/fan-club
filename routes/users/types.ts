import { type Static } from '@sinclair/typebox'

import {
    type addFollow,
    type createUser,
    type deleteUser,
    type updateUser,
} from './schemas'

export type CreateUserPayload = Static<typeof createUser>
export type UpdateUserPayload = Static<typeof updateUser>
export type UserParams = Static<typeof deleteUser>
export type FollowUserPayload = Static<typeof addFollow>
