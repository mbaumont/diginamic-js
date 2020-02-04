import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoListService } from '../todo-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'td-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  public todo: Todo;
  constructor(private Service: TodoListService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id: number;
    // On ne va transformer en int que si on est en mode modif et que l'id est donc null
    if (this.route.snapshot.paramMap.get('id') != null) {
        // tslint:disable-next-line: radix
        id = parseInt(this.route.snapshot.paramMap.get('id'));
     } else {id = null; }
    if (id == null) {
      this.todo = new Todo(0, '');
      } else {
        this.todo = this.Service.get(id);
      }
  }
  addTodo() {
    // Suivant l'id on va soit ajouter, soit modifer notre todo
    if (this.todo.id === 0) {
      this.todo.id = this.Service.getNewId();
      this.Service.add(this.todo);
    } else {
      this.Service.edit(this.todo);
    }
    this.router.navigate(['/list']);
  }
}
