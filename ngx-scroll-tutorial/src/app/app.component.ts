import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { NgScrollbar } from 'ngx-scrollbar';
import { v4 as uuidv4 } from 'uuid';

interface IUser {
    id: string;
    name: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, AfterViewInit {
    @ViewChild(NgScrollbar) scrollRef: NgScrollbar;
    length = 20;
    users: IUser[];
    scrollHeight: number;
    loading = false;
    ngOnInit(): void {
        this.users = Array.from( { length: this.length } ).map( ( _, i ) => {
            const id = uuidv4();
            return { id, name: `User ${ i + 1 }`}
        } );
    }

    ngAfterViewInit(): void {
        this.scrollRef.scrolled.subscribe( ( event: any ) => {
            const elem = event.target;
            this.scrollHeight = elem.scrollHeight;
            if ( elem.scrollTop + elem.clientHeight >= elem.scrollHeight ) {
                this.createUsers();
            }
        } );
    }

    addUser(): void {
        this.users.push( { 
            id: uuidv4(),
            name: `User added`
        } );
        this.scrollRef.scrollTo( {
            top: 100
        } )
    }

    createUsers(): void {
        this.loading = true;
        setTimeout( () => {
            const newUsers = Array.from( { length: 20 } ).map( ( _, i ) => {
                const id = uuidv4();
                return { id, name: `User ${ i + 1 + this.length }`}
            } );
            this.users = [ ...this.users, ...newUsers ];
            this.length += 20;
            this.loading = false;
        }, 3 * 1000 )

    }
}
