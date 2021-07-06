import { Author } from './Author';

export interface Book {
    _id?: string,
    name: string,
    gender: string,
    pages: number,
    author: string,
    userid: string,
    createdAt?: string,
    updatedAt?: string,
    _v?: number
}