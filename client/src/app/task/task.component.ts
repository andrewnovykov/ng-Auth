import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks = [];

  constructor( private loginService: UserService, private taskService: TaskService ) {

    this.taskService.getTasks().subscribe( task => this.tasks = task )

  }

  ngOnInit() {
  }

}
