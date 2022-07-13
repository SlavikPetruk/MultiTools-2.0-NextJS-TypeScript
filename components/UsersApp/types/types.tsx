export type UserType = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string,
    company: string,
    password: string,
    avatar: string,
    address: AddressType
}

export type AddressType = {
        country: string,
        city: string,
        street: string,
        alley: string
        number: number,
    }

export type IAddress = {
    street: string,
    city: string,
    zipcode: string,
}

export type ITodo = {
    id: number,
    title: string,
    completed: boolean
}