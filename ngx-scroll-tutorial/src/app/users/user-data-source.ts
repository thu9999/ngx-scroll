import { Observable, of } from 'rxjs';
import { CustomDataSource } from '../core/custom-data-source';
import { IUser } from './user';
import { catchError, finalize, scan } from 'rxjs/operators';
import { UserService } from './user.service';

export class UserDataSource extends CustomDataSource<IUser> {
    constructor( private userService: UserService ) {
        super();
    }
    
    connect(): Observable<IUser[]> {
        return this.data$.asObservable()
    }

    getData(): void {
        this.loading$.next( true );
        this.userService.getUsers().pipe(
            catchError( () => of( [] ) ),
            finalize( () => this.loading$.next( false ) )
        ).subscribe(
            users => {
                const currenUsers = this.data$.value;
                this.data$.next( [ ...currenUsers, ...users] ); 
            }
        );
    }
    
    addItem( item: IUser ): void {}
    
    editItem( item: IUser ): void {}
    
    removeItem( id: string ): void {
        const currentUsers = this.data$.value;
        const index = currentUsers.findIndex( user => user.id === id );
        if( index > -1 ) {
            currentUsers.splice( index, 1 );
            this.data$.next( currentUsers );
        }

    }
}