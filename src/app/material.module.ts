import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  exports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class MaterialModule {}
