import { StateModule } from './redux/state.module';
import { YoutubeModule } from './youtube/youtube.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    YoutubeModule,
    StateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
