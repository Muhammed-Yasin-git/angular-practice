import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task-service'; 
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-task-list',
  styleUrl: './task-list.css',
  templateUrl: './task-list.html',
})
export class TaskList {

  private taskService = inject(TaskService)

  tasks = this.taskService.getTasks()

  deleteTask(id: number) {
  const confirmed = confirm('Are you sure you want to delete this task?');

  if (confirmed) {
    this.taskService.deleteTask(id);
  }
}
}
