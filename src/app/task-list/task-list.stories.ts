import { moduleMetadata } from '@storybook/angular';
import { TaskListComponent } from './task-list.component';
import { TaskComponent } from '../tasks/task.component';
import { CommonModule } from '@angular/common';
import { taskData, actionsData } from '../tasks/task.stories';
import { Task } from '../tasks/task';

export default {
  title: 'TaskList',

  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      // this is like, init an angular module
      declarations: [TaskListComponent, TaskComponent],
      imports: [CommonModule],
    }),
  ],
};

export const defaultTasksData: Task[] = [
  { ...taskData, id: '1', title: 'Task 1' },
  { ...taskData, id: '2', title: 'Task 2' },
  { ...taskData, id: '3', title: 'Task 3' },
  { ...taskData, id: '4', title: 'Task 4' },
  { ...taskData, id: '5', title: 'Task 5' },
  { ...taskData, id: '6', title: 'Task 6' },
];

export const withPinnedTasksData: Task[] = [
  ...defaultTasksData.slice(0, 5),
  {
    id: '6',
    title: 'Task 6 (pinned)',
    state: 'TASK_PINNED',
  },
];

// stories!
// 1. default
export const Default = () => {
  return {
    component: TaskListComponent,
    template: `
    <div style="padding: 3rem">
      <app-task-list [tasks]="tasks" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)"></app-task-list>
    </div>
    `,
    props: {
      tasks: defaultTasksData,
      onPinTask: actionsData.onPinTask,
      onArchiveTask: actionsData.onArchiveTask,
    },
  };
};

// 2. with a pinned task
export const WithPinnedTask = () => {
  return {
    component: TaskListComponent,
    template: `
    <div style="padding: 3rem">
      <app-task-list [tasks]="tasks" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)"></app-task-list>
    </div>
    `,
    props: {
      tasks: withPinnedTasksData,
      onPinTask: actionsData.onPinTask,
      onArchiveTask: actionsData.onArchiveTask,
    },
  };
};

// 3. tasklist in loading state
export const Loading = () => ({
  template: `
    <div style="padding: 3rem">
      <app-task-list [tasks]="[]" loading="true" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)"></app-task-list>
    </div>
  `,
});
// tasklist no tasks
export const Empty = () => ({
  template: `
    <div style="padding: 3rem">
      <app-task-list [tasks]="[]" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)"></app-task-list>
    </div>
  `,
});
