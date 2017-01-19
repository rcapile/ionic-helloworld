import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { RodrigoPage  } from '../pages/rodrigo/rodrigo';
import { RealejoComponent } from '../components/realejo/realejo';
import { AddTodoComponent } from '../components/add-todo/add-todo';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    RodrigoPage,
    RealejoComponent,
    HomePage,
    TabsPage,
    AddTodoComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
     RodrigoPage,
    RealejoComponent,
    HomePage,
    TabsPage,
    AddTodoComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
