import { TodoService } from './../../providers/todo-service';
import { Component } from '@angular/core';
import { AddTodoComponent } from '../../components/add-todo/add-todo';

import { NavController, AlertController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [TodoService]
})
export class HomePage {
  tasks;
  constructor(
    public navCtrl: NavController, 
    public TodoService: TodoService, 
    public AlertControl:AlertController,
    public Modal:ModalController
    ) {

  }

  ionViewDidLoad() {
    //this.tasks = this.TodoService.get();
    this.TodoService.getTodos().subscribe(
      data => {this.tasks = data;},
      error => {
        console.log(error);
        let alert = this.AlertControl.create({
          title: "Erro",
          subTitle: "Erro subtitle"
        });
        alert.present();
        }
    )
  }

  addTodo() {
    let addModal = this.Modal.create(AddTodoComponent);
    addModal.onDidDismiss(todo => {
      console.log(todo);
      console.log(this.TodoService.createTodo(todo));
    })
    addModal.present();
  }

}
