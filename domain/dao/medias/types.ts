import type { Prisma } from '@prisma/client';
import type { mediaSelect } from './queries';

export type Media = Prisma.MediasGetPayload<{
    select: typeof mediaSelect
}>

export type CreatePayload = {
    title: string,
    description: string,
    url: string,
    userId: number,
}

export type UpdatePayload = Partial<Omit<CreatePayload, "userId">>
