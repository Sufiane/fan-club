import { Type } from '@sinclair/typebox';

const mediaIdParams = Type.Required(
    Type.Object({
        id: Type.Number({ minimum: 0 }),
    }),
)

export const getMedia = mediaIdParams
export const deleteMedia = mediaIdParams

export const createMedia = Type.Object({
    title: Type.String({ minLength: 1 }),
    description: Type.String(),
    url: Type.String({ format: 'url' }),
    userId: Type.Number({ minimum: 0 }),
})

export const updateMedia = Type.Object({
    title: Type.Optional(Type.String({ minLength: 1 })),
    description: Type.Optional(Type.String()),
    url: Type.Optional(Type.String({ format: 'url' })),
})
