import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IUser, UserList } from './user';

@Injectable( {
    providedIn: 'root'
} )
export class UserService {
    userList = UserList;

    getUsers(): Observable<IUser[]> {
        console.log( 'getUser' )
        return of( this.userList ).pipe(
            delay( 3000 )
        );
    }
}