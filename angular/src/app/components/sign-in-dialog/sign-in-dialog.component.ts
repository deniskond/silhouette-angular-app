import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-sign-in-dialog',
    templateUrl: './sign-in-dialog.component.html',
    styleUrls: ['./sign-in-dialog.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInDialogComponent {
    public isLoading = false;
    public signInForm = new FormGroup(
        {
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
        },
    );

    constructor(public dialogRef: MatDialogRef<SignInDialogComponent>) {}
}
