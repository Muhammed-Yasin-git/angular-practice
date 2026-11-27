import { Routes } from '@angular/router';

import { TaskList } from './components/task-list/task-list';
import { AddTask } from './components/add-task/add-task';
import { ViewTask } from './components/view-task/view-task';
import { EditTask } from './components/edit-task/edit-task';

export const routes: Routes = [
  {
    path: '',
    component: TaskList
  },
  {
    path: 'add-task',
    component: AddTask
  },
  {
    path: 'tasks/:id',
    component: ViewTask
  },
  {
    path: 'edit-task/:id',
    component: EditTask
  },
  {
    path: '**',
    redirectTo: ''
  }
];