import { type Static } from '@sinclair/typebox'

import {
    type createUser,
    type deleteUser,
    type updateUser,
} from './schemas'

export type CreateUserPayload = Static<typeof createUser>
export type UpdateUserPayload = Static<typeof updateUser>

export type UserParams = Static<typeof deleteUser>
