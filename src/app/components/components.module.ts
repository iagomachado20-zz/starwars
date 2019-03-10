import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MinutesecondsPipe } from '../pipes/minuteseconds.pipe';
import { CoutdownComponent } from './coutdown/coutdown.component';
import { PaginationComponent } from './pagination/pagination.component';

export const COMPONENTS = [
  HeaderComponent,
  CoutdownComponent,
  PaginationComponent
];

export const PIPES = [
  MinutesecondsPipe
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...COMPONENTS,
    ...PIPES,
    CoutdownComponent,
    PaginationComponent
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class ComponentsModule { }
