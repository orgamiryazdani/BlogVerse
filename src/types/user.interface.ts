export interface User {
    accessToken: string
}

export interface UserToken {
    id: number
    username: string
    email: string
    firstName: string
    lastName: string
    gender: string
    image: string
    accessToken: string
    refreshToken: string
}

export type UserSession = UserToken
