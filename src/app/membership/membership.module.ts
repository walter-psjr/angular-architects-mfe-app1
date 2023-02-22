import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembershipRoutingModule } from './membership-routing.module';
import { Route1Component } from './route1/route1.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    Route1Component
  ],
  imports: [
    CommonModule,
    MembershipRoutingModule,
    TranslateModule.forChild()
  ]
})
export class MembershipModule { }
