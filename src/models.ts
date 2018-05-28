export const BASE_API:string = 'https://swapi.co/api';


export class User {
    userName:string;
    Email:string;
    point:number;
}

export class People {
    name:string; 
    height:number;
    mass:number;
    hair_color:string; 
    skin_color:string; 
    eye_color:string; 
    birth_year:string; 
    gender:string; 
    homeworld:string; 
    films:any;
    species:string[];
    vehicles:string[];
    starships:any;
    created:any; 
    edited:any; 
    url:string;
}