import { Injectable } from '@angular/core';
import { Todo, Todos } from './todo.model';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  public todolist: Todos;
  constructor() {
    // Initialisation de la todolist
    this.todolist = [];
   }

  getAll() {
    return this.todolist;
  }
  get(id: number) {
    return this.todolist.find(e => e.id === id);
  }
  getNewId() {
    // On retourne l'id max apart si le tableau est vide, dans ce cas on retourne 1
    if (this.todolist.length === 0 ) {
      return 1;
    } else {return (Math.max(...this.todolist.map(x => x.id)) + 1); }
  }
  add(todo: Todo) {
    this.todolist.push(todo);
  }
  edit(todo: Todo) {
    this.todolist.find(e => e.id === todo.id).label = todo.label;
  }
  delete(id: number) {
    this.todolist = this.todolist.filter(e =>  e.id !== id);
  }

}
