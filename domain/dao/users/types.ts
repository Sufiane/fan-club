import { type Prisma } from '@prisma/client'

import { type basicSelect } from './queries'

export type BasicUser = Prisma.UsersGetPayload<{
    select: typeof basicSelect
}>

export type CreateUserPayload = {
    email: string,
    password: string,
    description: string,
    username: string,
    profilePictureUrl: string,
}

export type UpdateUserPayload = Partial<CreateUserPayload>
