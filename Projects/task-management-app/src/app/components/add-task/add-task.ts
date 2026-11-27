import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../../services/task-service';
import { Task } from '../../Models/task.model';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-add-task',
  styleUrl: './add-task.css',
  templateUrl: './add-task.html',
})
export class AddTask {
  private taskService = inject(TaskService);
  private router = inject(Router);

  taskForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', Validators.required),
    status: new FormControl<'pending' | 'in-progress' | 'completed'>('pending'),
    priority: new FormControl<'low' | 'medium' | 'high'>('medium'),
  });

  addTask() {
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    }

    const task = {
      id: Date.now(),
      ...this.taskForm.value,
    } as Task;

    this.taskService.addTask(task);

    this.taskForm.reset({
      title: '',
      description: '',
      status: 'pending',
      priority: 'medium',
    });
    this.router.navigate(['/']);
  }
}
