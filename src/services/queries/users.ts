import type { CreateUserAttrs } from '$services/types';
import { genId } from '$services/utils';
import { userKey } from '$services/keys';
import { client } from '$services/redis';

export const getUserByUsername = async (username: string) => {


};

export const getUserById = async (id: string) => { };

export const createUser = async (attrs: CreateUserAttrs) => {
    const id = genId();
    await client.hSet(userKey(id), {
        username: attrs.username,
        password: attrs.password
    });
    return id;
};
