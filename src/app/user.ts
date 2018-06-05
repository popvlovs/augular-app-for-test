export class User {
    id: string
    username: string
    realname?: string
    password: string
    orgnization?: string
    applications?: string
    phone?: string
    email?: string
    enabled: boolean
    locked: boolean
    expireDate?: number
}
