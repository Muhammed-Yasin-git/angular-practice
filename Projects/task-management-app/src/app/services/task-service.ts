import { Injectable, signal } from '@angular/core';
import { Task } from '../Models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = signal<Task[]>([]);

  getTasks() {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.update((tasks) => [...tasks, task]);
  }

  getTaskById(id: number) {
    return this.tasks().find((task) => task.id === id);
  }

  updateTask(updatedTask: Task) {
    this.tasks.update((tasks) =>
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
    );
  }

  deleteTask(id: number) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== id));
  }
}
