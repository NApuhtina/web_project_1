export interface UserInfo {
    userid: string;
    name: string;
    birthdate: string;
    age: number;
    organization: {
        name: string;
        position: string;
    };
}

export const usersInfoArray: UserInfo[] = [
    {
        userid: '127e4',
        name: 'John',
        birthdate: '1982-02-17T21:00:00.000Z',
        age: 40,
        organization: { name: 'Amazon', position: 'General manager' },
    },
    {
        userid: '127e5',
        name: 'Anna',
        birthdate: '1988-02-17T21:00:00.000Z',
        age: 34,
        organization: { name: 'Amazon', position: 'Manager' },
    },
];