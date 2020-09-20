import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../users/user';

export abstract class CustomDataSource<T> implements DataSource<T> {

    protected data$ = new BehaviorSubject<T[]>( [] );
    protected loading$ = new BehaviorSubject<boolean>( false );

    getLoadingAsObservable(): Observable<boolean> {
        return this.loading$.asObservable();
    }

    abstract connect(): Observable<T[]>;

    disconnect(): void {
        this.data$.complete();
        this.loading$.complete();
    }

    abstract getData( ...args: any ): void;

    abstract addItem( item: T ): void;

    abstract editItem( item: T ): void;

    abstract removeItem( id: string | number ): void;
}