import { Type } from '@sinclair/typebox';

export const getFeed = Type.Required(
    Type.Object({
        id: Type.Number({ minimum: 0 }),
    }),
)

export const updateFeedView = Type.Required(
    Type.Object({
        mediaId: Type.Number({ minimum: 0 }),
    }),
)
