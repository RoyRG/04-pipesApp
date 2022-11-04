import { NgModule } from '@angular/core';
//Prime Ng
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';

@NgModule({
  declarations: [
    BasicosComponent
  ],
  exports: [
    ButtonModule, 
    CardModule, 
    MenubarModule,
  ]
})
export class PrimeNgModule { }
