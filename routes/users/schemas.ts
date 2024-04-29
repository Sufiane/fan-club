import { Type } from '@sinclair/typebox'

const emailRule = Type.String({ format: 'email' })
const passwordRule = Type.String({ minLength: 7 })
const userIdParams = Type.Required(
    Type.Object({
        id: Type.Number({ minimum: 0 }),
    }),
)


export const createUser = Type.Required(
    Type.Object({
        username: Type.String({ minLength: 2 }),
        email: emailRule,
        password: passwordRule,
        description: Type.String(),
        profilePictureUrl: Type.String({ format: 'url' }),
    }),
)

export const deleteUser = userIdParams
export const getUser = userIdParams

export const updateUser =
    Type.Object({
        username: Type.Optional(Type.String({ minLength: 2 })),
        email: Type.Optional(emailRule),
        password: Type.Optional(passwordRule),
        description: Type.Optional(Type.String()),
        profilePictureUrl: Type.Optional(Type.String({ format: 'url' })),
    })
