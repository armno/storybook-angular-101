import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Task } from "./task";
@Component({
  selector: "task-item",
  template: `
    <div class="list-item {{ task?.state }}">
      <label class="checkbox">
        <input
          type="checkbox"
          [defaultChecked]="task?.state === 'TASK_ARCHIVED'"
          disabled
          name="checked"
        />
        <span class="checkbox-custom" (click)="onArchive(task.id)"></span>
      </label>
      <div class="title">
        <input
          type="text"
          [value]="task?.title"
          readonly
          placeholder="Input title"
        />
      </div>

      <div class="actions">
        <a *ngIf="task?.state !== 'TASK_ARCHIVED'" (click)="onPin(task.id)">
          <span class="icon-star"></span>
        </a>
      </div>
    </div>
  `
})
export class TaskComponent implements OnInit {
  title: string;

  @Input() task: Task;

  @Output() onPinTask: EventEmitter<string> = new EventEmitter();
  @Output() onArchiveTask: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onPin(id: string) {
    this.onPinTask.emit(id);
  }

  onArchive(id: string) {
    this.onArchiveTask.emit(id);
  }
}
