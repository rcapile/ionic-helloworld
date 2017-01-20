import { errorObject } from 'rxjs/util/errorObject';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the TodoService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TodoService {

  constructor(public http: Http) {
    console.log('Hello TodoService Provider');
  }
 getTodos():Observable<any>
 {
   return this.http.get('http://localhost:3000/todos')
                   .map(result => result.json())
                   .catch((error:any) => Observable.throw(errorObject.json.error));
 }
 createTodo(todo):Observable<any>
 {
   console.log('Create TodoService Provider');
   return this.http.put('http://localhost:3000/todos', todo)
                   .map(result => result.json())
                   .catch((error:any) => Observable.throw(errorObject.json.error));
}
  get() {
    return [
      {text:'Task 1'},
      {text:'Task 2'},
      {text:'Task 3'},
      {text:'Task 4'},
      {text:'Task 5'},
      {text:'Task 6'},
      {text:'Task 7'},
      {text:'Task 8'},
      {text:'Task 9'},
      {text:'Task 10'},
      {text:'Task 11'},
      {text:'Task 12'},
    ];
  }
}
