import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayOutComponent } from './lay-out.component';
import { LayOutMenuComponent } from './lay-out-menu/lay-out-menu.component';
import { LayOutCarouselComponent } from './lay-out-carousel/lay-out-carousel.component';
import { LayOutPromotionComponent } from './lay-out-promotion/lay-out-promotion.component';

import {LayOutBestModule} from './lay-out-best/lay-out-best.module';

@NgModule({
  declarations: [LayOutComponent, LayOutMenuComponent, LayOutCarouselComponent, LayOutPromotionComponent],
  exports:[LayOutComponent],
  imports: [
    CommonModule,LayOutBestModule
  ]
})
export class LayOutModule { }
