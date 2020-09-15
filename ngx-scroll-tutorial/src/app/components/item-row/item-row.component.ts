import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from './../../app.component';

@Component({
  selector: 'app-item-row',
  templateUrl: './item-row.component.html',
  styleUrls: ['./item-row.component.scss']
})
export class ItemRowComponent {
    @Input() user: IUser;
    @Output() editUserEvent = new EventEmitter();

    handleEditUser(): void {
        this.editUserEvent.emit();
    }
}
