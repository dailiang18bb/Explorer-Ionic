import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { Camera} from '@ionic-native/camera/ngx'
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { File } from '@ionic-native/file/ngx';
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';
import {environment} from '../environments/environment'
import { VisionServiceService} from './vision-service.service';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { IonicStorageModule } from '@ionic/storage';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    IonicStorageModule.forRoot(),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
    WebView,
    File,
    VisionServiceService,
    TextToSpeech,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
