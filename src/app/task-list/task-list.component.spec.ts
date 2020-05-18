import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListComponent } from './task-list.component';
import { render } from '@testing-library/angular';
import { TaskComponent } from '../tasks/task.component';
import { withPinnedTasksData } from './task-list.stories';

describe('TaskListComponent', () => {
  // let component: TaskListComponent;
  // let fixture: ComponentFixture<TaskListComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [TaskListComponent, TaskComponent],
  //   }).compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(TaskListComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('renders pinned tasks at the start of the list', async () => {
    const mockActions = jest.fn();
    const tree = await render(TaskListComponent, {
      declarations: [TaskComponent],
      componentProperties: {
        tasks: withPinnedTasksData,
        loading: false,
        onPinTask: {
          emit: mockActions,
        } as any,
        onArchiveTask: {
          emit: mockActions,
        } as any,
      },
    });

    const c = tree.fixture.componentInstance;
    expect(c.tasksInOrder[0].id).toEqual('6');
  });
});
