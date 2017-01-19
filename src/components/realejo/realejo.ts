import { Component } from '@angular/core';

/*
  Generated class for the Realejo component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'realejo',
  templateUrl: 'realejo.html'
})
export class RealejoComponent {

  text: string;

  constructor() {
    console.log('Hello Realejo Component');
    this.text = 'Cambio';
  }

}
