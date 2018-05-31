import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatTableModule, 
        MatProgressSpinnerModule, MatInputModule, MatDialogModule } from '@angular/material';

@NgModule({
imports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatTableModule,
     MatProgressSpinnerModule, MatInputModule, MatDialogModule],

exports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatTableModule,
     MatProgressSpinnerModule, MatInputModule, MatDialogModule],
})
export class CustomMaterialModule { }