import { MyTestComponent } from './my-test/my-test.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyTestService } from './my-test.service';

@NgModule({
  declarations: [AppComponent, MyTestComponent],
  exports: [],
  imports: [BrowserModule, AppRoutingModule],
  providers: [MyTestService],
  bootstrap: [AppComponent]
})
export class AppModule {}
