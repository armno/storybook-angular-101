import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { TaskComponent } from "./task.component";
import { Task } from "./task";

export const task: Task = {
  id: "1",
  title: "Test Task",
  state: "TASK_INBOX",
  updatedAt: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask")
};

storiesOf("Task", module)
  .addDecorator(
    moduleMetadata({
      declarations: [TaskComponent]
    })
  )
  .add("default", () => {
    return {
      template: `<task-item [task]="task" (onPinTask)="onPinTask($event)" (onArchive)="onArchive($event)">`,
      props: {
        task,
        onPinTask: actions.onPinTask,
        onArchiveTask: actions.onArchiveTask
      }
    };
  })
  .add("pinned", () => {
    return {
      template: `<task-item [task]="task" (onPinTask)="onPinTask($event)" (onArchive)="onArchive($event)">`,
      props: {
        task: { ...task, state: "TASK_PINNED" },
        onPinTask: actions.onPinTask,
        onArchiveTask: actions.onArchiveTask
      }
    };
  })
  .add("archived", () => {
    return {
      template: `<task-item [task]="task" (onPinTask)="onPinTask($event)" (onArchive)="onArchive($event)">`,
      props: {
        task: { ...task, state: "TASK_ARCHIVED" },
        onPinTask: actions.onPinTask,
        onArchiveTask: actions.onArchiveTask
      }
    };
  });
