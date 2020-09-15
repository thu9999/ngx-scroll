import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ItemRowComponent } from './components/item-row/item-row.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
    declarations: [
        AppComponent,
        ItemRowComponent,
        ItemFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule, 
        FormsModule,
        NgScrollbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatDividerModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        FlexLayoutModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
