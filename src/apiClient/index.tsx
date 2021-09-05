export type User = {
    readonly name: string,
    readonly age: number,
    }


export class ApiClient {
    private static readonly users: User[] = [
        {
            name: "Alex",
            age: 29
        },
        {
            name: "Peter",
            age: 25
        },
        {
            name: "Frank",
            age: 22
        },
    ];

    static async fetchUsers(): Promise<User[]> {
    return Promise.resolve(ApiClient.users);
    }
}
    