import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayOutBestComponent } from './lay-out-best.component';

@NgModule({
  declarations: [LayOutBestComponent],
  exports:[LayOutBestComponent],
  imports: [
    CommonModule
  ]
})
export class LayOutBestModule { }
