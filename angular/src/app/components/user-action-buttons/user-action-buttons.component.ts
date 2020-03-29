import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignUpDialogComponent } from '../sign-up-dialog/sign-up-dialog.component';
import { SignInDialogComponent } from '../sign-in-dialog/sign-in-dialog.component';

@Component({
    selector: 'app-user-action-buttons',
    templateUrl: './user-action-buttons.component.html',
    styleUrls: ['./user-action-buttons.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserActionButtonsComponent {
    constructor(private dialog: MatDialog) {}

    public signUp(): void {
        this.dialog.open(SignUpDialogComponent);
    }

    public signIn(): void {
        this.dialog.open(SignInDialogComponent);
    }
}
