import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatTableModule, MatProgressSpinnerModule, MatInputModule } from '@angular/material';

@NgModule({
imports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatTableModule, MatProgressSpinnerModule, MatInputModule],
exports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatTableModule, MatProgressSpinnerModule, MatInputModule],
})
export class CustomMaterialModule { }