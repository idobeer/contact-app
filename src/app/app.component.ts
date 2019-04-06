import { Component, ViewChild } from '@angular/core';
import { App, MenuController, Nav, Platform } from 'ionic-angular';
import { ComponentsListPage } from '../pages/components/list/components.list.page';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth.service';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  pages;
  rootPage;

  private app;
  private platform;
  private menu: MenuController;

  @ViewChild(Nav) nav: Nav;

  constructor(app: App, platform: Platform,
    menu: MenuController,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private auth: AuthService) {
    this.menu = menu;
    this.app = app;
    this.platform = platform;
    this.splashScreen = splashScreen;
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Components', component: ComponentsListPage, icon: 'grid' },
    ];
  }

  initializeApp() {
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });

      this.auth.afAuth.authState
        .subscribe(
          user => {
            if (user) {
              this.rootPage = HomePage;
            } else {
              this.rootPage = LoginPage;
            }
          },
          () => {
            this.rootPage = LoginPage;
          }
        );
  }

  login() {
    this.menu.close();
    this.auth.signOut();
    this.nav.setRoot(LoginPage);
  }

  logout() {
    this.menu.close();
    this.auth.signOut();
    this.nav.setRoot(HomePage);
  }

  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }
}


