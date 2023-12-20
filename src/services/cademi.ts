import { getUserResponse } from '@src/types/getUserResponse';
import { UserDto } from '@src/models/UserDto'
import axios from 'axios';




export const GetUsersByTag = async () => {
    
    const instance = axios.create({
        baseURL: process.env.BASE_URL_CADEMI,
        timeout: 100000,
        headers: { 'Authorization': process.env.KEY_API_CADEMI },
    });
    // tag principal TAG DA COMUNIDADE
    // const TAG_ID = process.env.PRODUCT_TAG
    const TAG_ID = '28195' //TAG DE TESTE
    try {
        let nextUrl: string | null = null
        let users: UserDto[] = []

        do {
            const { data, status } = await instance.get<getUserResponse>(nextUrl ? nextUrl : `/usuario/lista_por_tag/${TAG_ID}`);
            users.push(...data.data.usuario)
            nextUrl = data.data.paginator.next_page_url as string | null

            await sleep(3000);
        } while (nextUrl !== null);

        users = Array.from(new Set(users.map(a => a.id)))
            .map(id => {
                return users.find(a => a.id === id)
            }) as UserDto[]

        console.log(users)
        return users
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

