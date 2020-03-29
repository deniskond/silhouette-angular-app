import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-todo-page',
    templateUrl: './todo-page.component.html',
    styleUrls: ['./todo-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoPageComponent {}
