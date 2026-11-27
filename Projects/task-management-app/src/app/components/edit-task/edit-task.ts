import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task-service';
import { Task } from '../../Models/task.model';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-edit-task',
  styleUrl: './edit-task.css',
  templateUrl: './edit-task.html',
})
export class EditTask implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private taskService = inject(TaskService);

  taskId!: number;

  taskForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', Validators.required),
    status: new FormControl<'pending' | 'in-progress' | 'completed'>('pending'),
    priority: new FormControl<'low' | 'medium' | 'high'>('medium'),
  });

  ngOnInit(): void {
    this.taskId = Number(this.route.snapshot.paramMap.get('id'));

    const task = this.taskService.getTaskById(this.taskId);

    if (task) {
      this.taskForm.patchValue({
        title: task.title,
        description: task.description,
        status: task.status,
        priority: task.priority,
      });
    }
  }
  updateTask() {
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    }

    const updatedTask = {
      id: this.taskId,
      ...this.taskForm.value,
    } as Task;

    this.taskService.updateTask(updatedTask);

    this.router.navigate(['/']);
  }
}
