import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import {MatIconModule} from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { MainComponent } from './main.component';



@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule, MatTabsModule, MatIconModule, MatButtonModule, CarouselModule,MatSelectModule,
    MatFormFieldModule, MatInputModule, MatToolbarModule, ReactiveFormsModule, FormsModule
  ]
})
export class MainModule { }
