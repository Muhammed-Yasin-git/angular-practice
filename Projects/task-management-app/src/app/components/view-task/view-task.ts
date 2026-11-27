import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task-service';
import { Task } from '../../Models/task.model';

@Component({
  imports: [],
  selector: 'app-view-task',
  styleUrl: './view-task.css',
  templateUrl: './view-task.html',
})
export class ViewTask implements OnInit{
  private route = inject(ActivatedRoute);
  private taskService = inject(TaskService);

  task?: Task;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.task = this.taskService.getTaskById(id);
  }
}
