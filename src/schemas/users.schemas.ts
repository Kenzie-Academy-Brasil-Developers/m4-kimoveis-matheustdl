import { z } from 'zod';

const userSchema = z.object({
    id: z.number(),
    name: z.string().max(45),
    email: z.string().max(45).email(),
    password: z.string().max(120),
    admin: z.boolean().default(false),
    createdAt: z.string(),
    updatedAt: z.string().nullish(),
    deletedAt: z.string().nullish(),
});
const userRequestSchema = userSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
});
const userResponseSchema = userSchema.omit({
    password: true,
});

const listUserSchema = userResponseSchema.array();

const userUpdateSchema = userSchema.partial().omit({
    admin: true,
    id: true,
});

const requestLoginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});
const responseLoginSchema = z.object({
    token: z.string(),
});

export {
    userRequestSchema,
    userSchema,
    userResponseSchema,
    userUpdateSchema,
    listUserSchema,
    requestLoginSchema,
    responseLoginSchema,
};
