import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { TaskComponent } from './task.component';
import { Task } from './task';
import { CommonModule } from '@angular/common';

// main menu item in storybook navigation
export default {
  title: 'Task',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      declarations: [TaskComponent],
      imports: [CommonModule],
    }),
  ],
};

// actions: for @Output() i think
export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

// initial data
// "the shape of data that a component expects"
export const taskData: Task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
};

// 3 different states (stories) of the component
export const Default = () => {
  return {
    component: TaskComponent,
    template: `
    <div style="padding: 3rem">
      <app-task [task]="task" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)"></app-task>
    </div>
    `,
    props: {
      task: taskData,
      onPinTask: actionsData.onPinTask,
      onArchiveTask: actionsData.onArchiveTask,
    },
  };
};

export const Pinned = () => ({
  component: TaskComponent,
  template: `
    <div style="padding: 3rem">
      <app-task [task]="task" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)"></app-task>
    </div>
    `,
  props: {
    task: {
      ...taskData,
      state: 'TASK_PINNED',
    },
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask,
  },
});

export const Archived = () => ({
  component: TaskComponent,
  template: `
    <div style="padding: 3rem">
      <app-task [task]="task" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)"></app-task>
    </div>
    `,
  props: {
    task: {
      ...taskData,
      state: 'TASK_ARCHIVED',
    },
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask,
  },
});
