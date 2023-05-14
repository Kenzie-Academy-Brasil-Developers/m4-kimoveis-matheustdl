import { DeepPartial } from 'typeorm';
import { z } from 'zod';
import {
    listUserSchema,
    userResponseSchema,
    userRequestSchema,
    userSchema,
} from '../schemas/users.schemas';

type TUserRequest = z.infer<typeof userRequestSchema>;
type TUserComplete = z.infer<typeof userSchema>;
type TUserResponse = z.infer<typeof userResponseSchema>;
type TUSerArr = z.infer<typeof listUserSchema>;
type TUpdateUserRequest = DeepPartial<TUserRequest>;

export {
    TUserRequest,
    TUserComplete,
    TUserResponse,
    TUSerArr,
    TUpdateUserRequest,
};
