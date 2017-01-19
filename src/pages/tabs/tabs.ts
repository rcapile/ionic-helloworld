import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { RodrigoPage  } from '../rodrigo/rodrigo';
import { RealejoComponent } from '../../components/realejo/realejo';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = RodrigoPage;
  tab4Root: any = RealejoComponent;
  tab5Root: any = ContactPage;

  constructor() {

  }
}
