import { YoutubeModule } from './youtube/youtube.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule, BrowserModule, CoreModule, YoutubeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
