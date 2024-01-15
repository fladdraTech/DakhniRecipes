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

export interface GetRecipeInteface extends BaseObjInterface {
    name: string;
    image1: string | undefined;
    rate: number;
    cooking_time: string
    id: string
    image2: string | undefined;
    image3: string | undefined;
    link: string | undefined;
    serve_qty: number
}

export interface GetPopularInterface extends BaseObjInterface {
  recipe: {
    name: string;
    image1: string | undefined;
    rate: number;
    cooking_time: string
    id: string
    image2: string | undefined;
    image3: string | undefined;
    link: string | undefined;
    serve_qty: number
  }

  
}

export interface GetNewInteface extends BaseObjInterface {
    name: string;
    image1: string | undefined;
    rate: number;
    cooking_time: string
    id: string
    image2: string | undefined;
    image3: string | undefined;
    link: string | undefined;
    serve_qty: number
}

export interface GetTrendingInterface extends BaseObjInterface {
    recipe: {
      name: string;
      image1: string | undefined;
      rate: number;
      cooking_time: string
      id: string
      image2: string | undefined;
      image3: string | undefined;
      link: string | undefined;
      serve_qty: number
    }
}
