import { Component, OnInit, Inject } from '@angular/core';
import { Todos, Todo } from '../todo.model';
import { TodoListService } from '../todo-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'td-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})

export class TodoListComponent implements OnInit {
  public todolist: Todos;
  constructor(private Service: TodoListService, private router: Router) {
   }

  ngOnInit() {
    this.todolist = this.Service.getAll();
  }

  editTodo(id: number) {
    // On renvoi la page d'edition, on va donc passer dans todo-edit-component
    this.router.navigate(['/edit/' + id]);
  }

  deleteTodo(id: number) {
    this.Service.delete(id);
    // On remet à jour la liste pour que l'objet supprimer soit directement non visible
    this.todolist = this.Service.getAll();
    this.router.navigate(['/list']);
  }


}
