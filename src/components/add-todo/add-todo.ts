import { NavController, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/*
  Generated class for the AddTodo component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'add-todo',
  templateUrl: 'add-todo.html'
})
export class AddTodoComponent {

  todo:any;

  form: FormGroup;

  isReadyToSave: boolean;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      title: ['', Validators.required],
      date: [''],
      active: [false]
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  done() {
    if(!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }
}
