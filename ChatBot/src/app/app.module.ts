import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//--------------------------------------------------------------------------------------
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { HeaderComponent } from './header/header.component';
import { MatRippleModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { ProcessDesignerComponent } from './process-designer/process-designer.component';
//--------------------------------------------------------------------------------------





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProcessDesignerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MatToolbarModule,
    FlexLayoutModule,
    MatRippleModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




