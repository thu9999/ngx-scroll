import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { NgScrollbar } from 'ngx-scrollbar';
import { Observable } from 'rxjs';
import { IUser } from './users/user';
import { UserDataSource } from './users/user-data-source';
import { UserService } from './users/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('detailExpand', [
          state('collapsed', style({height: '0px', minHeight: '0'})),
          state('expanded', style({height: '*'})),
          transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
      ],
})
export class AppComponent implements OnInit, AfterViewInit {
    @ViewChild( NgScrollbar ) scrollRef: NgScrollbar;
    @ViewChild( 'userTable', { static: true } ) userTable: MatTable<any>;
    userSource: UserDataSource
    loading$: Observable<boolean>;
    columnsToDisplay = [ 'id', 'name', 'actions' ];
    expandedColumnsToDisplay = [ 'age', 'job' ];
    expandedElement: IUser = null;

    currentId: string = null;
    isEditting = false;

    constructor( private fb: FormBuilder, private userService: UserService ) {
    }

    ngOnInit(): void {
        this.userSource = new UserDataSource( this.userService );
        this.loading$ = this.userSource.getLoadingAsObservable();
        this.userSource.getData();
    }

    ngAfterViewInit(): void {
        this.scrollRef.scrolled.subscribe( ( event: any ) => {
            const elem = event.target;
            if ( elem.scrollTop + elem.clientHeight >= elem.scrollHeight ) {
                this.userSource.getData();
            }
        } );
    }

    reloadUsers(): void {
        this.userSource.getData();
    }

    addUser(): void {
    }

    createUsers(): void {
    }

    editUser( user: IUser ): void {
        this.isEditting = true;
        this.currentId = user.id;
    }

    saveUser( event: any ): void {
    }

    removeUser( id: string ): void {
        this.userSource.removeItem( id );
    }
}
