import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IUser } from 'src/app/app.component';

@Component({
    selector: 'app-item-form',
    templateUrl: './item-form.component.html',
    styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {
    @Input() user: IUser;
    @Output() saveUserEvent = new EventEmitter();
    modelFormGroup: FormGroup;
    constructor( private fb: FormBuilder ) { }

    ngOnInit(): void {
        this.modelFormGroup = this.fb.group( {
            id: new FormControl( { value: this.user.id, disabled: true } ),
            name: this.user.name
        } )
    }

    handleSaveUser(): void {
        this.saveUserEvent.emit( this.modelFormGroup.value );
    }
}
