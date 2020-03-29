import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { EMAIL_VALIDATION_REGEXP } from './helpers/email-validation-regexp';

@Component({
    selector: 'app-sign-up-dialog',
    templateUrl: './sign-up-dialog.component.html',
    styleUrls: ['./sign-up-dialog.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpDialogComponent {
    public isLoading = false;
    public signUpForm = new FormGroup(
        {
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            email: new FormControl('', Validators.compose([Validators.required, this.validateEmail.bind(this)])),
            password: new FormControl('', Validators.required),
        },
    );

    constructor(public dialogRef: MatDialogRef<SignUpDialogComponent>) {}

    private validateEmail({ value: email }: AbstractControl): Record<string, string> | null {
        return EMAIL_VALIDATION_REGEXP.test(String(email).toLowerCase()) ? null : { email: 'Wrong e-mail format' };
    }
}
