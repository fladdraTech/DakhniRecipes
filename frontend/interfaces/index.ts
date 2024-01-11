import { BaseObjInterface } from './baseObjectInterface';

export interface ResponseInterface {
    data: any;
    status: number;
    statusText: string;
} 

export interface CategoryInterface extends BaseObjInterface {
    name: string;
}
export interface RecipeInterface extends BaseObjInterface {
    name: string;
    image1: string | null;
    rate: number;
}

