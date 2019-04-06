import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { NgxErrorsModule } from '@ultimate/ngxerrors';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddContactPage } from '../pages/add-contact/add-contact'
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ComponentsModule } from '../pages/components/components.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AuthService } from '../services/auth.service';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { ContactService } from '../services/contact.service';

import { FCM } from '@ionic-native/fcm';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddContactPage,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    NgxErrorsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddContactPage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Contacts,
    FCM,
    AngularFireAuth,
    ContactService,
    AuthService,
    AngularFirestore,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
