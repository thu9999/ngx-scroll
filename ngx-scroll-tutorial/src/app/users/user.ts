import { v4 as uuidv4 } from 'uuid';

export class IUser {
    id: string;
    name: string;
    details: UserDetail[]

    constructor( id: string, name: string, details: UserDetail[] ) {
        this.id = id;
        this.name = name;
        this.details = details;
    }
}

export class UserDetail {
    age: number;
    job: string;

    constructor( age: number, job: string ) {
        this.age = age;
        this.job = job;
    }
}

export const UserList: IUser[] = Array.from( { length: 20 } ).map( ( _, i ) => {
    const id = uuidv4();
    return { 
        id, 
        name: `User ${ i + 1 }`,
        details: [
            {
                age: 30,
                job: 'Engineer'
            }
        ]
    }
} );